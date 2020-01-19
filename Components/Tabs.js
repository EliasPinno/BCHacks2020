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
    width: 500,
    height: 500
  },

  headerText: {

  }
});

export default Tabs;
