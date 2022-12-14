import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {Feather} from '@expo/vector-icons';

import { ItemWrapper } from './ItemWrapper';

import trashIcon from '../assets/icons/trash/trash.png'

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number, name:string) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
   
    <FlatList
    
    
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 , alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.container}>
          <ItemWrapper index={index} >
            <View  >
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                //TODO - use onPress (toggle task) prop
                onPress={()=>toggleTaskDone(item.id)}
              >
                <View 
                  testID={`marker-${index}`}
                  //TODO - use style prop 
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { item.done && (
                    <Feather 
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}
                </View>

                <Text 
                  //TODO - use style prop
                  style={item.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              //TODO - use onPress (remove task) prop
              onPress={()=> removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
          </View>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
   
  )
}

const styles = StyleSheet.create({
  container:{
    width:327,
    height:64,
    borderRadius:8 ,
    backgroundColor:'#333333',
    marginBottom:8

  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#F2F2F2',
    fontFamily: ' Inter_500Medium'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 30,
    backgroundColor: '#5E60CE',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: ' Inter_500Medium'
  }
})