import { Block } from '../blocks/Block';
import { BlockElement } from '../blocks/BlockElement';
import { LayoutBlockType } from '../blocks/LayoutBlockType';
import { RenderableLayoutBlock } from '../blocks/RenderableLayoutBlock';
import { TextObject } from '../blocks/TextObject';
import { TextObjectType } from '../blocks/TextObjectType';
import { isActionsBlockElement } from '../blocks/isActionsBlockElement';
import { isContextBlockElement } from '../blocks/isContextBlockElement';
import { isInputBlockElement } from '../blocks/isInputBlockElement';
import { isSectionBlockAccessoryElement } from '../blocks/isSectionBlockAccessoryElement';
import { isTextObject } from '../blocks/isTextObject';
import { ActionsBlock } from '../blocks/layout/ActionsBlock';
import { ContextBlock } from '../blocks/layout/ContextBlock';
import { InputBlock } from '../blocks/layout/InputBlock';
import { SectionBlock } from '../blocks/layout/SectionBlock';
import { Markdown } from '../blocks/text/Markdown';
import { PlainText } from '../blocks/text/PlainText';
import { isNotNull } from '../isNotNull';
import { Permutation } from '../utils/Permutation';
import { BlockContext } from './BlockContext';
import { BlockRenderers } from './BlockRenderers';
import { Conditions } from './Conditions';
import { renderBlockElement } from './renderBlockElement';
import { renderLayoutBlock } from './renderLayoutBlock';
import { renderTextObject } from './renderTextObject';
import { resolveConditionalBlocks } from './resolveConditionalBlocks';

export abstract class SurfaceRenderer<
  T,
  B extends RenderableLayoutBlock = RenderableLayoutBlock
> implements BlockRenderers<T>
{
  public constructor(
    protected readonly allowedLayoutBlockTypes: Permutation<B['type']>
  ) {}

  private isAllowedLayoutBlock = (block: Block): block is B =>
    (this.allowedLayoutBlockTypes as string[])?.includes(block.type) ?? true;

  public render(blocks: readonly Block[], conditions?: Conditions): T[] {
    if (!Array.isArray(blocks)) {
      return [];
    }

    return blocks
      .flatMap(resolveConditionalBlocks(conditions))
      .filter(this.isAllowedLayoutBlock)
      .map(renderLayoutBlock(this))
      .filter(isNotNull);
  }

  public renderTextObject(
    textObject: TextObject,
    index: number,
    context: BlockContext
  ): T | null {
    return renderTextObject(this, context)(textObject, index);
  }

  public renderActionsBlockElement(
    block: BlockElement,
    index: number
  ): T | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.ACTIONS
      ) === false &&
      !isActionsBlockElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.ACTION)(block, index);
  }

  /** @deprecated */
  public renderActions(
    element: ActionsBlock['elements'][number],
    _context: BlockContext,
    _: undefined,
    index: number
  ): T | null {
    return this.renderActionsBlockElement(element, index);
  }

  public renderContextBlockElement(
    block: TextObject | BlockElement,
    index: number
  ): T | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.CONTEXT
      ) === false &&
      !isContextBlockElement(block)
    ) {
      return null;
    }

    if (isTextObject(block)) {
      return renderTextObject(this, BlockContext.CONTEXT)(block, index);
    }

    return renderBlockElement(this, BlockContext.CONTEXT)(block, index);
  }

  /** @deprecated */
  public renderContext(
    element: ContextBlock['elements'][number],
    _context: BlockContext,
    _: undefined,
    index: number
  ): T | null {
    return this.renderContextBlockElement(element, index);
  }

  public renderInputBlockElement(block: BlockElement, index: number): T | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.INPUT
      ) === false &&
      !isInputBlockElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.FORM)(block, index);
  }

  /** @deprecated */
  public renderInputs(
    element: InputBlock['element'],
    _context: BlockContext,
    _: undefined,
    index: number
  ): T | null {
    return this.renderInputBlockElement(element, index);
  }

  public renderSectionAccessoryBlockElement(
    block: BlockElement,
    index: number
  ): T | null {
    if (
      (this.allowedLayoutBlockTypes as string[])?.includes(
        LayoutBlockType.SECTION
      ) === false &&
      !isSectionBlockAccessoryElement(block)
    ) {
      return null;
    }

    return renderBlockElement(this, BlockContext.SECTION)(block, index);
  }

  /** @deprecated */
  public renderAccessories(
    element: Exclude<SectionBlock['accessory'], undefined>,
    _context: BlockContext,
    _: undefined,
    index: number
  ): T | null {
    return this.renderSectionAccessoryBlockElement(element, index);
  }

  /** @deprecated */
  public plainText(
    element: PlainText,
    context: BlockContext = BlockContext.NONE,
    index = 0
  ): T | null {
    return this[TextObjectType.PLAIN_TEXT](element, context, index);
  }

  /** @deprecated */
  public text(
    textObject: TextObject,
    context: BlockContext = BlockContext.NONE,
    index = 0
  ): T | null {
    switch (textObject.type) {
      case TextObjectType.PLAIN_TEXT:
        return this.plain_text(textObject, context, index);

      case TextObjectType.MRKDWN:
        return this.mrkdwn(textObject, context, index);

      default:
        return null;
    }
  }

  public abstract plain_text(
    textObject: PlainText,
    context: BlockContext,
    index: number
  ): T | null;

  public abstract mrkdwn(
    textObject: Markdown,
    context: BlockContext,
    index: number
  ): T | null;
}

export type SurfaceRendererPayload<S extends BlockRenderers<any>> =
  S extends SurfaceRenderer<any, infer T> ? T[] : never;
