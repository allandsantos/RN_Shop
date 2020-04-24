import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CartScreen = (props) => {
  const product = props.navigation.getParam('product');
  return (
    <View style={styles.screen}>
      <Text>Cart {product.title}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
