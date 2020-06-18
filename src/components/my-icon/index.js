import React from 'react';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

export function MyIcon(props) {
  const {size = 25, color = '#000000', ...otherProps} = props;

  const Icon = createIconSetFromIcoMoon(icoMoonConfig);

  return <Icon size={size} color={color} {...otherProps} />;
}
