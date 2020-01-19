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
          <Header title={headerTitle} style = {styles.mainTop} />
          <MatrixContainer style = {styles.mainLeft}/>
          <TaskContainer style = {styles.mainRight}/>
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  master: {
    flex: 3,
    backgroundColor: "#F5F5F5"
  },
  mainLeft: {
    flex: 2,
    alignItems: 'center',
  },
  mainRight: {
    flex: 1,
    alignItems: 'right',
    backgroundColor: 'blue'
  },
  mainTop: {
    height: 55,
  }
});
/*

<Button title ="AHHHHHH" />

      <TextInput placeholder="Write something here"/>
*/
