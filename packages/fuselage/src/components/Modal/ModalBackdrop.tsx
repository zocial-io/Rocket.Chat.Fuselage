import React, { ComponentProps, ReactElement } from 'react';

import { Box } from '..';

type ModalBackdropProps = ComponentProps<typeof Box>;

export const ModalBackdrop = (props: ModalBackdropProps): ReactElement => (
  <Box rcx-modal__backdrop {...props} />
);
