import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
const ToDoBox = props => {
  return(
    <View style={styles.headContainer,styles.textStyling}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create( {
  headContainer: {
    marginTop: 40,
    backgroundColor: 'red'
  },
  textStyling: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  },
});
export default ToDoBox;
