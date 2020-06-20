import React from 'react';

import {MyIcon} from '../my-icon';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

export function ToDoCard(props) {
  const {isDone = false, title = '', onDelete = () => {}} = props;

  function renderIsDone() {
    if (isDone) {
      return <MyIcon name="check" color="#50A133" />;
    }
    return <MyIcon name="check" color="#D0D0D0" />;
  }

  return (
    <View style={styles.todoCard}>
      {renderIsDone()}
      <Text
        numberOfLines={1}
        style={[styles.todoCardTitle, isDone && styles.isDone]}>
        {title}
      </Text>

      <TouchableWithoutFeedback onPress={onDelete}>
        <MyIcon name="trash-can" color="#C60000" />
      </TouchableWithoutFeedback>
    </View>
  );
}
