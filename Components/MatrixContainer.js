import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Tabs from './Tabs';
const margin = 25;
const borderRadius = 8;
var parentSize = Dimensions.get('window').width * (2/3);

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
    width: parentSize,
    height: parentSize,
    aspectRatio: 1,
    margin: margin,
    borderRadius: borderRadius,
    alignContent: 'space-between',
    backgroundColor: 'blue',
    marginTop: 40
  },
  eachRow: {
    flex: 1,
    flexDirection: 'row'
  },
  topLeft: {
    flex: 1,
    borderRadius: borderRadius,
    margin: margin,
    backgroundColor: 'red'
  },
  topRight: {
    flex: 1,
    borderRadius: borderRadius,
    margin: margin,
    backgroundColor: 'yellow'
  },
  botLeft: {
    flex: 1,
    borderRadius: borderRadius,
    margin: margin,
    backgroundColor: 'green'
  },
  botRight: {
    flex: 1,
    borderRadius: borderRadius,
    margin: margin,
    backgroundColor: 'purple'
  },
});
export default MatrixContainer;
