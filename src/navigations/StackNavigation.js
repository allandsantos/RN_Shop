import {createStackNavigator} from 'react-navigation-stack';
import ShopScreen from '../screens/ShopScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import {createNavigator} from 'react-navigation';

const StackNavigation = createStackNavigator({
  Shop: ShopScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen,
});

export default createNavigator(StackNavigation);
