import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { TextObject } from '../TextObject';

/** @todo */
export type ConversationsSelectElement = Actionable<{
  type: `${BlockElementType.CONVERSATIONS_SELECT}`;
  placeholder: TextObject;
  filter?: unknown;
  initialConversation?: unknown;
}>;
