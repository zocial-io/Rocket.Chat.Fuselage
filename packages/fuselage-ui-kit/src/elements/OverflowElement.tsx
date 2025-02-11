import {
  Button,
  PositionAnimated,
  Options,
  Icon,
  useCursor,
} from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { useRef, useCallback, ReactElement, useMemo } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import { BlockProps } from '../utils/BlockProps';
import { fromTextObjectToString } from '../utils/fromTextObjectToString';

type OverflowElementProps = BlockProps<UiKit.OverflowElement>;

const OverflowElement = ({
  block,
  context,
  surfaceRenderer,
}: OverflowElementProps): ReactElement => {
  const [{ loading }, action] = useUiKitState(block, context);

  const fireChange = useCallback(
    ([value]: [unknown, string]) => action({ target: { value } }),
    [action]
  );

  const options = useMemo<[string, string][]>(
    () =>
      block.options.map(({ value, text }, i) => [
        value,
        fromTextObjectToString(surfaceRenderer, text, i) ?? '',
      ]),
    [block.options, surfaceRenderer]
  );

  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
    useCursor(-1, options, (selectedOption, [, hide]) => {
      fireChange([selectedOption[0], selectedOption[1]]);
      reset();
      hide();
    });

  const ref = useRef<HTMLElement>(null);
  const onClick = useCallback(() => {
    ref.current?.focus();
    show();
  }, [show]);

  const handleSelection = useCallback(
    ([value]: [unknown, string]) => {
      action({ target: { value } });
      reset();
      hide();
    },
    [action, hide, reset]
  );

  return (
    <>
      <Button
        ref={ref}
        small
        ghost
        onClick={onClick}
        onBlur={hide}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        disabled={loading}
      >
        <Icon name='kebab' size={20} />
      </Button>
      <PositionAnimated
        width='auto'
        visible={visible}
        anchor={ref}
        placement='bottom-start'
      >
        <Options onSelect={handleSelection} options={options} cursor={cursor} />
      </PositionAnimated>
    </>
  );
};

export default OverflowElement;
