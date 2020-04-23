import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Product Detail</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
