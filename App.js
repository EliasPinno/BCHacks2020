import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MatrixContainer from "./Components/MatrixContainer.js";
import Header from './Components/Header.js';
import TaskContainer from './Components/TaskContainer.js'
const headerTitle = 'To Do';

export default function App() {
    return (
      <View>
        <View style={styles.centered, styles.container}>
          <Header title={headerTitle} />
          <MatrixContainer />
          <TaskContainer />
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

<Button title ="AHHHHHH" />

      <TextInput placeholder="Write something here"/>
*/
