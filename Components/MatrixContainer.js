import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Tabs from './Tabs';
const margin = 15;
const borderRadius = 5;
var parentSizeX = Dimensions.get('window').width * (2/3);
var parentSizeY = Dimensions.get('window').height * (8.4/10);
const s1 = "#000";
const s2 = {
  	width: 3,
  	height: 3,
  };
const s3 = 0.2;
const s4 = 8.5;


const MatrixContainer = props => {
  return (
    <View style={styles.headContainer}>
      <View style={styles.eachRow}>
        <View style={styles.topLeft}>
          <Tabs title = "Do Now" color = 'red'/>
        </View>
        <View style={styles.topRight}>
          <Tabs title = "Schedule"/>
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
    shadowColor: s1,
    shadowOffset: s2,
    shadowOpacity: s3,
    shadowRadius: s4,
    backgroundColor: '#A6C2E3'
  },
  topRight: {
    flex: 1,
    borderRadius: borderRadius,
    marginTop: margin,
    marginRight: margin,
    marginBottom: margin,
    shadowColor: s1,
    shadowOffset: s2,
    shadowOpacity: s3,
    shadowRadius: s4,
    backgroundColor: '#B6DBE0'
  },
  botLeft: {
    flex: 1,
    borderRadius: borderRadius,
    marginLeft: margin,
    marginBottom: margin,
    marginRight: margin,
    shadowColor: s1,
    shadowOffset: s2,
    shadowOpacity: s3,
    shadowRadius: s4,
    backgroundColor: '#F2C759'
  },
  botRight: {
    flex: 1,
    borderRadius: borderRadius,
    marginRight : margin,
    marginBottom: margin,
    shadowColor: s1,
    shadowOffset: s2,
    shadowOpacity: s3,
    shadowRadius: s4,
    backgroundColor: '#F2C2C2'
  },
});
export default MatrixContainer;
