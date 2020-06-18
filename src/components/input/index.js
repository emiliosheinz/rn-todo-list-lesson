import React from 'react';

import {TextInput} from 'react-native';

import styles from './styles';

export function Input(props) {
  const {placeholderTextColor = '#000000', style = {}, ...otherProps} = props;

  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={[styles.mainInput, style]}
      {...otherProps}
    />
  );
}
