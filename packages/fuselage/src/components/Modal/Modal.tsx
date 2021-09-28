import React, { forwardRef, ReactElement, ComponentProps } from 'react';

import { Box } from '..';

type ModalProps = ComponentProps<typeof Box>;

export const Modal = forwardRef<HTMLElement, ModalProps>(
  ({ children, is = 'form', ...props }, ref): ReactElement => (
    <Box is='dialog' rcx-modal {...props}>
      <Box
        is={is}
        {...(is === 'form' && { action: '#' })}
        ref={ref}
        rcx-modal__inner
        elevation='2'
      >
        {children}
      </Box>
    </Box>
  )
);
