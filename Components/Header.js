import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from './NavBar.js';

const Header = ({ title }) => {
  return(
  //LOGOS in Views

  <View style={styles.headerContainer}>
    <Text style={styles.headerText}> {title.toUpperCase()} </Text>
  </View>
);
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    backgroundColor: 'red'
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  }
});
export default Header;
