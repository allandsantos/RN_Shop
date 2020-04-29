import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  ShopNavigation,
  OrderNavigation,
  UserProductsNavigation,
} from './StackNavigation';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  contentOptions: {
    activeTintColor: Colors.purple,
  },
};

const DrawerNavigation = createDrawerNavigator(
  {
    Shop: ShopNavigation,
    ManageProducts: UserProductsNavigation,
    Orders: OrderNavigation,
  },
  defaultNavigationOptions,
);

export default DrawerNavigation;
