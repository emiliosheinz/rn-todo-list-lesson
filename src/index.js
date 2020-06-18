import React from 'react';
import {View} from 'react-native';

import {ToDoCard, Input, Button} from './components';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder="To do" />
      <Button label="Adicionar" />
      <View style={styles.separator} />
      <View>
        <ToDoCard />
      </View>
    </View>
  );
}
