import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MatrixContainer from "./Components/MatrixContainer.js";
import Header from './Components/Header.js';
import TaskBuilder from './Components/TaskBuilder.js'
const headerTitle = 'To Do';

export default function App() {
    return (
      <View>
        <StatusBar backgroundColor = 'black' barStyle="light-content"/>
        <View style={styles.centered, styles.container}>
          <Header title={headerTitle} />
          <MatrixContainer />
        </View>
        <View>
          <TaskBuilder />
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  centered: {
    alignItems: 'center',
  }
});
/*
<<<<<<< HEAD
<Button title ="AHHHHHH" />
=======

<Button title ="AHHHHHH" />

>>>>>>> 4bf66a5b3fa3e99bd997258f09378148d2ecd2ff
      <TextInput placeholder="Write something here"/>
*/
