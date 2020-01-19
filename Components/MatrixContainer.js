import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Tabs from './Tabs';
const margin = 15;
const borderRadius = 5;
var parentSizeX = Dimensions.get('window').width * (2/3);
var parentSizeY = Dimensions.get('window').height * (8.4/10);


const MatrixContainer = props => {
  return (
    <View style={styles.headContainer}>
      <View style={styles.eachRow}>
        <View style={styles.topLeft}>
          <Tabs title = "Do Now" color = '0000FF'/>
        </View>
        <View style={styles.topRight}>
          <Tabs title = "Schedule" color = '#000'/>
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
    width: parentSizeX,
    height: parentSizeY,
    aspectRatio: 1,
    margin: margin,
    borderRadius: borderRadius,
    shadowOffset: { width: 6,  height: 6, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    alignContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10
  },
  eachRow: {
    flex: 1,
    flexDirection: 'row'
  },
  topLeft: {
    flex: 1,
    borderRadius: borderRadius,
    marginTop: margin,
    marginLeft: margin,
    marginRight: margin,
    marginBottom: margin,
    backgroundColor: 'red'
  },
  topRight: {
    flex: 1,
    borderRadius: borderRadius,
    marginTop: margin,
    marginRight: margin,
    marginBottom: margin,
    backgroundColor: 'yellow'
  },
  botLeft: {
    flex: 1,
    borderRadius: borderRadius,
    marginLeft: margin,
    marginBottom: margin,
    marginRight: margin,
    backgroundColor: 'green'
  },
  botRight: {
    flex: 1,
    borderRadius: borderRadius,
    marginRight : margin,
    marginBottom: margin,
    backgroundColor: 'purple'
  },
});
export default MatrixContainer;
