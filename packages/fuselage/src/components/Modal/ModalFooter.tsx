import React, { PropsWithChildren, ReactElement } from 'react';

import { Box } from '..';

export const ModalFooter = ({
  children,
}: PropsWithChildren<{}>): ReactElement => (
  <Box rcx-modal__footer>{children}</Box>
);
