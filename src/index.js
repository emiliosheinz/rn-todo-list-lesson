import React, {useState, useEffect} from 'react';
import {View, Alert, FlatList} from 'react-native';

import {ToDoCard, Input, Button} from './components';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const StorageKey = '@TODOS';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(StorageKey, jsonValue);
  } catch (e) {
    Alert.alert('Não foi possível salvar no storage.');
  }
};

const getData = async () => {
  try {
    const todos = await AsyncStorage.getItem(StorageKey);
    return todos !== null ? JSON.parse(todos) : [];
  } catch (e) {
    Alert.alert('Não foi possível carregar do storage.');
    return [];
  }
};

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setTodos(data);
    });
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  const onDelete = (id) => {
    const newTodos = todos.filter((item, index) => id !== index);
    // storeData(newTodos).then(() => {
    setTodos(newTodos);
    // });
  };

  function onChangeText(text) {
    setTodo(text);
  }

  function onAddTodo() {
    if (todo.length) {
      const newTodos = todos.concat({
        isDone: false,
        title: todo,
        id: todos.length,
      });
      // storeData(newTodos).then(() => {
      setTodos(newTodos);
      setTodo('');
      // });
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

  function renderItem({item, index}) {
    return (
      <ToDoCard
        isDone={item.isDone}
        title={item.title}
        onDelete={onDelete}
        onPress={onPress}
        id={index}
      />
    );
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

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
