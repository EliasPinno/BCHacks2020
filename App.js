import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MatrixContainer from "./Components/MatrixContainer.js";
import Header from './Components/Header.js';
import TaskContainer from './Components/TaskContainer.js'
const headerTitle = 'To Do';

export default function App() {
    return (
      <View>
        <View style={styles.master}>
          <Header title={headerTitle} />
          <MatrixContainer />
          <TaskContainer />
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: "light blue"
  },
  mainLeft: {
    alignItems: 'center',
  },
  mainRight: {
    alignItems: 'right',
  },
  mainTop: {

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
