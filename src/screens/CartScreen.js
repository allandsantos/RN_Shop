import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
