/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

import { Block } from '../blocks/Block';
import { TextObject } from '../blocks/TextObject';
import { TextObjectType } from '../blocks/TextObjectType';

type TypeToPropsMap = {
  [T in TextObject as T['type']]: Omit<T, 'type' | 'text'> & {
    children?: string;
  };
};

type PropsForBlock<B extends Block> = Omit<
  {
    [K in keyof B]: Exclude<B[K], undefined> extends Block | Block[]
      ? JSXInternal.Element
      : B[K];
  },
  'type'
>;

namespace JSXInternal {
  export type Element = Block | Block[];
  export type IntrinsicElements = {
    [B in Block as B['type']]: PropsForBlock<B>;
  };
}

export function jsx(
  type: undefined,
  props: {
    children: Block;
  }
): [Block];

export function jsx(
  type: TextObject['type'],
  props: TypeToPropsMap[TextObject['type']]
): TextObject;

export function jsx<B extends Block>(
  type: B['type'],
  props: PropsForBlock<B>,
  ...children: never
): B;

export function jsx(
  type: undefined | TextObject['type'] | unknown,
  props:
    | {
        children: Block;
      }
    | TypeToPropsMap[TextObject['type']]
    | Record<string, unknown>
): unknown {
  switch (type) {
    case undefined:
      return [props.children];

    case TextObjectType.PLAIN_TEXT:
    case TextObjectType.MARKDOWN: {
      const { children, ...rest } = props;
      return { type, text: children, ...rest };
    }

    default:
      return { type, ...props };
  }
}

export function jsxs<B extends Block[]>(
  type: undefined,
  props: {
    children: B;
  }
): B;

export function jsxs(
  type: Block['type'] | undefined,
  props: Record<string, unknown>
) {
  switch (type) {
    case undefined:
      return props.children;

    default:
      return jsx(type, props);
  }
}

export namespace jsx {
  export import JSX = JSXInternal;
}

export { JSXInternal as JSX };
