import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
const TaskBuilder = props => {
  return(
    <View style = {styles.titleField}>
      <View>
        <TextInput placeholder="Write what the task is"/>
      </View>
      <View style = {styles.descriptionField}>
        <TextInput placeholder="Add a brief description (Optional)" textAlignVertical="top" multiline={true} numberOfLines={3} />
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
  descriptionField: {
    margin: 100,
    alignItems: "stretch"
  },
  titleField:{

  },
});
export default TaskBuilder;
