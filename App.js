import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import MatrixContainer from "./Components/MatrixContainer";

export default function App() {
  return (
    <View style={styles.container}>
    <MatrixContainer />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>I am trying to add more text to the file</Text>
      <Text>I hate react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*

<Button title ="AHHHHHH" />

      <TextInput placeholder="Write something here"/>
*/
