import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Orders Screen</Text>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
