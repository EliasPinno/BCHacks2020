import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './app/components/Header.js';
const headerTitle = 'To Do';

export default function App() {
    return (
      <View>
      <StatusBar backgroundColor = 'black' barStyle="light-content"/>
      <View style={styles.centered, styles.container}>
        <Header title={headerTitle} />
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  centered: {
    alignItems: 'center',
  }
});
