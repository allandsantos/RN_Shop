import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductList from '../../components/ProductList';
import {useSelector} from 'react-redux';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View style={styles.screen}>
      <ProductList products={products} />
    </View>
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Products',
  };
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
