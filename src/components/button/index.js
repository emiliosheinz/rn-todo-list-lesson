import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export function Button(props) {
  const {buttonStyle = {}, textStyle = {}, label, ...otherProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.mainButton, buttonStyle]}
      {...otherProps}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
