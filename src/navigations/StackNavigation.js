import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import EditProductScreen from '../screens/manage/EditProductScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import {Icon} from 'native-base';
import UserProductsScreen from '../screens/manage/UserProductsScreen';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.mainApp,
    },
    headerTitleStyle: {
      fontFamily: Fonts.openSansBold,
    },
    headerBackTitleStyle: {
      fontFamily: Fonts.openSans,
    },
    headerTintColor: Colors.white,
    // headerTitleContainerStyle: {
    //   width: '100%',
    //   alignItems: 'center',
    // },
  },
};

export const ShopNavigation = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    ...defaultNavigationOptions,
    ...{
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Icon name="ios-cart" fontSize={23} color={drawerConfig.tintColor} />
        ),
      },
    },
  },
);

export const OrderNavigation = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    ...defaultNavigationOptions,
    ...{
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Icon name="ios-list" fontSize={23} color={drawerConfig.tintColor} />
        ),
      },
    },
  },
);
export const UserProductsNavigation = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
  },
  {
    ...defaultNavigationOptions,
    ...{
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Icon
            name="ios-create"
            fontSize={23}
            color={drawerConfig.tintColor}
          />
        ),
      },
    },
  },
);
