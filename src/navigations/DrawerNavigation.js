import {createDrawerNavigator} from 'react-navigation-drawer';
import {ShopNavigation, OrderNavigation} from './StackNavigation';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  contentOptions: {
    activeTintColor: Colors.purple,
  },
};

const DrawerNavigation = createDrawerNavigator(
  {
    Shop: ShopNavigation,
    Orders: OrderNavigation,
  },
  defaultNavigationOptions,
);

export default DrawerNavigation;
