import {createStackNavigator} from 'react-navigation-stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
    },
    // headerTitleStyle: {
    //   textAlign: 'center',
    // },
    headerTintColor: Colors.white,
    // headerTitleContainerStyle: {
    //   width: '100%',
    //   alignItems: 'center',
    // },
  },
};

const StackNavigation = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  defaultNavigationOptions,
);

export default StackNavigation;
