import React, { ReactNode, ReactElement } from 'react';

import { Box } from '..';

export const ModalFooter = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box rcx-modal__footer>{children}</Box>;
