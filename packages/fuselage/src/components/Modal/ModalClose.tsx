import React, { ComponentProps, ReactElement } from 'react';

import { ActionButton } from '..';

type ModalCloseProps = Omit<ComponentProps<typeof ActionButton>, 'icon'>;

export const ModalClose = (props: ModalCloseProps): ReactElement => (
  <ActionButton small ghost flexShrink={0} {...props} icon='cross' />
);
