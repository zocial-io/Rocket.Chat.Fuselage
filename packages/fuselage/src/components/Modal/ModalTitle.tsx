import React, { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';

type ModalTitleProps = ComponentProps<typeof Box>;

export const ModalTitle = ({
  children,
  ...props
}: ModalTitleProps): ReactElement => (
  <Box rcx-modal__title {...props}>
    {children}
  </Box>
);
