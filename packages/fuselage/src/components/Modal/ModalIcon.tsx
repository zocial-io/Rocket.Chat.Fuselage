import React, { ReactElement, ComponentProps } from 'react';

import { Icon } from '..';

type ModalIconProps = ComponentProps<typeof Icon>;

export const ModalIcon = ({
  size = 'x24',
  ...props
}: ModalIconProps): ReactElement => <Icon {...props} size={size} />;
