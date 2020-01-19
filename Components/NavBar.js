import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = ({ title }) => {
  return (
    <View style = {styles.master}>
      <Text style = {styles.t2}> Account </Text>
      <Text style = {styles.t1}> Settings </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: 250,
    backgroundColor: '#F2C759'
  },
  t1: {
    flex: 1,
    paddingBottom: 7,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 12,
  },
  t2: {
    flex: 1,
    paddingBottom: 7,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 12,
  }
});

export default NavBar;
