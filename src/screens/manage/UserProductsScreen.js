import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import ProductCard from '../../components/shop/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import * as ProductActions from '../../store/actions/products';
import * as CartActions from '../../store/actions/cart';
import MenuDrawer from '../../components/UI/MenuDrawer';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';

const UserProductsScreen = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);

  const deleteHandler = (item) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(ProductActions.removeProduct(item.id));
          dispatch(CartActions.removeProduct(item.id));
        },
      },
    ]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.productsContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <ProductCard
                prod={{
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                }}
                onEdit={() => {
                  props.navigation.navigate('EditProduct', {
                    product: item,
                  });
                }}
                onRemove={() => deleteHandler(item)}
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add"
          iconName="md-add"
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }}
        />
      </HeaderButtons>
    ),
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
