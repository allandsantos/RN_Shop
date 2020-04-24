import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductCard from '../../components/ProductCard';
import * as cartActions from '../../store/actions/cart';
import CartItem from '../../models/cart-item';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductCard
              prod={{
                id: item.id,
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl,
              }}
              onViewDetails={() => {
                props.navigation.navigate('ProductDetails', {product: item});
              }}
              onAddToCart={() => {
                dispatch(
                  cartActions.addItemsToCart(
                    new CartItem(
                      1,
                      item.price,
                      item.title,
                      item.price * item.quantity,
                    ),
                  ),
                );
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  productsContainer: {
    flex: 1,
    padding: 20,
  },
});
