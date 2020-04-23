import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Products Screen</Text>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
