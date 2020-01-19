import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tabs = ({ title }) => {
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

  headerText: {
    padding: 45,
    fontWeight:'bold',
    color: '#FFF'
  }
});

export default Tabs;
