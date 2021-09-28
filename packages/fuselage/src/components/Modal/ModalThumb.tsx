import React, { ComponentProps, ReactElement } from 'react';

import { Avatar, Box } from '..';

type ModalThumbProps = ComponentProps<typeof Avatar>;

export const ModalThumb = (props: ModalThumbProps): ReactElement => (
  <Box>
    <Avatar size='x32' {...props} />
  </Box>
);
