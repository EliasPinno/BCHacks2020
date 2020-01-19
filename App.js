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
          <View style = {styles.bottomRow}>
            <MatrixContainer style = {styles.mainLeft} />
            <TaskContainer style = {styles.mainRight} />
          </View>ss
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
  master: {
    flexDirection: 'column',
    backgroundColor: "#F5F5F5"
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomRow: {
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  mainLeft: {
    flex: 4,
    flexGrow: 4,
  },
  mainRight: {
    flex: 1,
    flexGrow: 1,
  },
  mainTop: {
  }
});
