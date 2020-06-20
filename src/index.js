import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import {ToDoCard, Input, Button} from './components';

import styles from './styles';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    {isDone: false, title: 'Passear com o dog'},
    {isDone: true, title: 'Jantar'},
    {isDone: false, title: 'Sai para correr'},
    {isDone: false, title: 'Dormir'},
    {isDone: true, title: 'Acordar denovo'},
  ]);

  function onDelete() {
    Alert.alert('Apagando');
  }

  function onChangeText(text) {
    setTodo(text);
  }

  function onAddTodo() {
    if (todo.length) {
      setTodos(todos.concat({isDone: false, title: todo}));
      setTodo('');
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="To do"
        onChangeText={(text) => onChangeText(text)}
        value={todo}
      />
      <Button label="Adicionar" onPress={onAddTodo} />
      <View style={styles.separator} />
      <View>
        {todos.map((item, index) => {
          return (
            <ToDoCard
              isDone={item.isDone}
              title={item.title}
              onDelete={onDelete}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
}
