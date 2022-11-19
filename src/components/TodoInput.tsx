import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if(!task)
    return;

    addTask(task);
    setTask('');
    //TODO - Call addTask if task not empty and clean input value 
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        returnKeyType="send"
        selectionColor="#F2F2F2"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}


        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
        //TODO - onPress prop
      >
        <Feather name="plus-circle" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
      marginHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: -28,
  },
  input: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: '#262626',
      borderColor: '#5E60CE',
      borderRadius: 6,
      color: '#F2F2F2',
      borderWidth: 1,
      height: 52,
  },
  addButton: {
      marginLeft: 4,
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      width: 52,
      height: 52,
      backgroundColor: '#4EA8DE',
  },
});