import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, {
  forwardRef,
  ReactElement,
  ComponentProps,
  FormEvent,
} from 'react';

import { Box } from '..';

type ModalProps = ComponentProps<typeof Box>;

export const Modal = forwardRef<HTMLElement, ModalProps>(
  ({ children, is = 'form', onSubmit, ...props }, ref): ReactElement => {
    const _onSubmit = useMutableCallback((e: FormEvent<HTMLOrSVGElement>) => {
      e.preventDefault();
      onSubmit?.(e);
    });

    return (
      <Box is='dialog' rcx-modal {...props}>
        <Box
          is={is}
          {...(is === 'form' && { action: '#' })}
          onSubmit={_onSubmit}
          ref={ref}
          rcx-modal__inner
          elevation='2'
        >
          {children}
        </Box>
      </Box>
    );
  }
);
