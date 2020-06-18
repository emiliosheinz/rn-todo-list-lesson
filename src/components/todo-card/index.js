import React from 'react';

import {MyIcon} from '../my-icon';
import {View, Text} from 'react-native';

import styles from './styles';

export function ToDoCard() {
  return (
    <View style={styles.todoCard}>
      <MyIcon name="check" color="#50A133" />
      <Text numberOfLines={1} style={styles.todoCardTitle}>
        Levar o cachorro pra tomar água e comer carne moida
      </Text>
      <MyIcon name="trash-can" color="#C60000" />
    </View>
  );
}
