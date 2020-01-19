import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const MatrixContainer = props => {
  return (
    <View style={styles.headContainer}>
      <Text>"EEEEEEEEE"</Text>
      <View style={styles.topLeft}>

      </View>
      <View style={styles.topRight}>

      </View>
      <View style={styles.botLeft}>

      </View>
      <View style={styles.botRight}>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headContainer: {
    marginTop: 40,

  },
  topLeft: {
    width: 500,
  },
  topRight: {
  },
  botLeft: {
  },
  botRight: {
  },
});
export default MatrixContainer;
