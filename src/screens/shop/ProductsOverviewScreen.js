import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductCard from '../../components/shop/ProductCard';
import * as cartActions from '../../store/actions/cart';
import CartItem from '../../models/cart-item';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import MenuDrawer from '../../components/UI/MenuDrawer';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            const onAddToCart = () =>
              dispatch(
                cartActions.addItemsToCart(
                  new CartItem(item.id, 1, item.price, item.title, item.price),
                ),
              );
            return (
              <ProductCard
                prod={{
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                }}
                onViewDetails={() => {
                  props.navigation.navigate('ProductDetails', {
                    product: item,
                    onAddToCart,
                  });
                }}
                onAddToCart={onAddToCart}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
HeaderButtons;
ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Products',
    headerLeft: <MenuDrawer navData={navData} />,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => {
            navData.navigation.setParams(navData.onRemove);
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
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
