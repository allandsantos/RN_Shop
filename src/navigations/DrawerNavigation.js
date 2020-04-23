import {createDrawerNavigator} from 'react-navigation-drawer';
import OrdersScreen from '../screens/manage/OrdersScreen';
import EditProductScreen from '../screens/manage/EditProductScreen';
import StackNavigation from './StackNavigation';
import {createAppContainer} from 'react-navigation';

const DrawerNavigation = createDrawerNavigator({
  Shop: StackNavigation,
  Orders: OrdersScreen,
  EditProduct: EditProductScreen,
});

export default createAppContainer(DrawerNavigation);
