import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './Tabs';

const MatrixContainer = props => {
  return (
    <View style={styles.headContainer}>
      <View style={styles.eachRow}>
        <View style={styles.topLeft}>
          <Tabs title = "Do Now" />
        </View>
        <View style={styles.topRight}>
          <Tabs title = "Schedule" />
        </View>
      </View>
      <View style={styles.eachRow}>
        <View style={styles.botLeft}>
          <Tabs title = "Delegate" />
        </View>
        <View style={styles.botRight}>
          <Tabs title = "Burn Task" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headContainer: {
    flex: 2,
    width: 500,
    marginTop: 40
  },
  eachRow: {
    flex: 1,
    flexDirection: 'row'
  },
  topLeft: {
    flex: 1,
    backgroundColor: 'red'
  },
  topRight: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'yellow'
  },
  botLeft: {
    flex: 1,
    backgroundColor: 'green'
  },
  botRight: {
    flex: 1,
    backgroundColor: 'purple'
  },
});
export default MatrixContainer;
