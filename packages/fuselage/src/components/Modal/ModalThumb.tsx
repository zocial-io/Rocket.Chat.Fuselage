import { Avatar, Box } from '@rocket.chat/fuselage';
import React, { ComponentProps, ReactElement } from 'react';

type ModalThumbProps = ComponentProps<typeof Avatar>;

export const ModalThumb = (props: ModalThumbProps): ReactElement => (
  <Box>
    <Avatar size='x32' {...props} />
  </Box>
);
