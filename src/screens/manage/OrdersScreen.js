import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Orders Screen</Text>
    </View>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Orders',
  };
};

export default OrdersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
