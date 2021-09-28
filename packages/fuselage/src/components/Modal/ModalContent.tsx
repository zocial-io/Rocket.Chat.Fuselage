import React, { ComponentProps, ReactElement } from 'react';

import { Scrollable, Box } from '..';

type ModalContentProps = ComponentProps<typeof Box> &
  Pick<ComponentProps<typeof Scrollable>, 'onScrollContent'>;

export const ModalContent = ({
  children,
  onScrollContent,
  ...props
}: ModalContentProps): ReactElement => (
  <Scrollable vertical onScrollContent={onScrollContent}>
    <Box rcx-modal__content>
      <Box rcx-modal__content-wrapper {...props}>
        {children}
      </Box>
    </Box>
  </Scrollable>
);
