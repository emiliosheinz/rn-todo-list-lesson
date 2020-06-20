import React, {useState} from 'react';
import {View, Alert, ScrollView} from 'react-native';

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

  function onPress(id) {
    const newTodos = todos.map((item, index) => {
      if (index === id) {
        return {...item, isDone: true};
      }
      return {...item};
    });
    setTodos(newTodos);
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
      <ScrollView>
        {todos.map((item, index) => {
          return (
            <ToDoCard
              isDone={item.isDone}
              title={item.title}
              onDelete={onDelete}
              key={index}
              onPress={onPress}
              id={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
