import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,Slider } from 'react-native';

const TaskBuilder = props => {
  var state = {
    slideValue: 0
  }
  return(
    <View style ={styles.titleField}>
      <View style={styles.TextFields}>
        <Text>The title of the task</Text>
      </View>
      <View>
        <TextInput placeholder="Write what the task is"/>
      </View>
      <View style={styles.TextFields}>
        <Text>How important is this task</Text>
      </View>
      <View style={styles.TextFields}>
        <Text>When does this task need to be done</Text>
      </View>
      <View>
      </View>
      <View style={styles.ButtonStyling}>
        <Button title = "Create Task" color = "blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextFields: {
    marginTop: 40,
    backgroundColor: 'red'
  },
  textStyling: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleField:{

  },
});
export default TaskBuilder;
