import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductItem from './ProductItem';
import Colors from '../constants/Colors';

const renderProduct = (prod) => {
  return <ProductItem prod={prod} />;
};

const ProductList = (props) => {
  const {products} = props;
  return (
    <View style={styles.productsContainer}>
      <FlatList data={products} renderItem={({item}) => renderProduct(item)} />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    padding: 20,
  },
});
