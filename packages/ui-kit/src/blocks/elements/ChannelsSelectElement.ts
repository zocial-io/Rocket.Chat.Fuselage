import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { TextObject } from '../TextObject';

/** @todo */
export type ChannelsSelectElement = Actionable<{
  type: `${BlockElementType.CHANNELS_SELECT}`;
  placeholder: TextObject;
  filter?: unknown;
  initialChannel?: unknown;
}>;
