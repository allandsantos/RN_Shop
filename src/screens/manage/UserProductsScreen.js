import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ProductCard from '../../components/shop/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import * as ProductActions from '../../store/actions/products';
import * as CartActions from '../../store/actions/cart';
import MenuDrawer from '../../components/UI/MenuDrawer';

const UserProductsScreen = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            const onEdit = () => {
              props.navigation.navigate('EditProduct');
            };
            return (
              <ProductCard
                prod={{
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                }}
                onEdit={() => {
                  props.navigation.navigate('ProductDetails', {
                    product: item,
                    onEdit: onEdit,
                  });
                }}
                onRemove={() => {
                  dispatch(ProductActions.removeProduct(item.id));
                  dispatch(CartActions.removeProduct(item.id));
                }}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Products Manager',
    headerLeft: <MenuDrawer navData={navData} />,
  };
};

export default UserProductsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  productsContainer: {
    flex: 1,
    padding: 20,
  },
});
