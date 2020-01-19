import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoBox from './ToDoBox.js';
import TaskBuilder from './TaskBuilder.js';

const TaskContainer = props =>{
  return(
    <View style = {styles.headContainer}>
      <View style={styles.taskBuilderStyle}>
        <TaskBuilder />
      </View>
      <View style={styles.toDoListStyle}>
        <ToDoBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    marginTop: 15,
    flex: 1,
  },
  toDoListStyle: {

  },
  taskBuilderStyle:{

  },
});

export default TaskContainer;
