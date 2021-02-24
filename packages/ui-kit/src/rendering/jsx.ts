/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

import { Block } from '../blocks/Block';

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

export { JSXInternal as JSX };

export const jsxFrag = Symbol('jsxFrag');

export function jsx<B extends Block>(
  type: typeof jsxFrag,
  props: never,
  ...children: B[]
): B;

export function jsx<B extends Block>(
  type: B['type'],
  props: PropsForBlock<B>,
  ...children: never
): B;

export function jsx(
  type: unknown,
  props: Record<string, unknown>,
  ...children: Block[]
): unknown {
  if (type === jsxFrag) {
    return children;
  }

  return {
    type,
    ...props,
  };
}

export namespace jsx {
  export import JSX = JSXInternal;
}
