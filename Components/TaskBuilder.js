import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const TaskBuilder = props => {
  return(
    <View>
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
    fontWeight: '500'
  },
});
export default TaskBuilder;
