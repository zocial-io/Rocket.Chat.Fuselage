import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { TextObject } from '../TextObject';

/** @todo */
export type UsersSelectElement = Actionable<{
  type: `${BlockElementType.USERS_SELECT}`;
  placeholder: TextObject;
  filter?: unknown;
  initialUser?: unknown;
}>;
