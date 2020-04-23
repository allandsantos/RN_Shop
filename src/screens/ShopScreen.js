import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShopScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Shop Screen</Text>
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
