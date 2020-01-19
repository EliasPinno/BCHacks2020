import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Tabs = ({ title, colors }) => {
  return (
    <View style = {styles.sizing}>
      <Text style = {styles.headerText}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sizing: {
    aspectRatio: 1
  },
  shadows: {
    shadowOffset: { width: 6,  height: 6, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  headerText: {
    padding: 30,
    fontWeight:'bold',
    fontSize: 25,
  }
});

export default Tabs;
