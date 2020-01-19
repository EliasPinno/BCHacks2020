import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from './NavBar.js';

const Header = ({ title }) => {
  return(
  //LOGOS in Views

  <View style={styles.headerContainer}>
    <Text style={styles.headerText}> {title.toUpperCase()} </Text>
    <NavBar style = {styles.nav} />
  </View>
);
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    flex: 2,
    alignContent: "space-between",
    backgroundColor: '#FFFFFF'
  },
  headerText: {
    flex: 1,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  nav: {
    width: 1,
    alignItems: 'flex-end'
  }

});
export default Header;
