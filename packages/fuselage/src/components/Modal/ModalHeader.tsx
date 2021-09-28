import React, { ReactElement, ComponentProps } from 'react';

import { Box, Margins } from '..';

type ModalHeaderProps = ComponentProps<typeof Box>;

export const ModalHeader = ({
  children,
  ...props
}: ModalHeaderProps): ReactElement => (
  <Box rcx-modal__header is='header' {...props}>
    <Box rcx-modal__header-inner>
      <Margins all='x8'>{children}</Margins>
    </Box>
  </Box>
);
