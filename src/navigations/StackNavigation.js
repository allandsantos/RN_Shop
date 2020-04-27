import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrdersScreen from '../screens/manage/OrdersScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
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

export const StackNavigation = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailScreen,
    Cart: CartScreen,
  },
  defaultNavigationOptions,
);

export const OrderNavigation = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  defaultNavigationOptions,
);

export default StackNavigation;
