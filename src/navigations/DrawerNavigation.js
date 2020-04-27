import {createDrawerNavigator} from 'react-navigation-drawer';
import EditProductScreen from '../screens/manage/EditProductScreen';
import {StackNavigation, OrderNavigation} from './StackNavigation';
import {createAppContainer} from 'react-navigation';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  contentOptions: {
    activeTintColor: Colors.green,
  },
};

const DrawerNavigation = createDrawerNavigator(
  {
    Shop: StackNavigation,
    Orders: OrderNavigation,
  },
  defaultNavigationOptions,
);

export default createAppContainer(DrawerNavigation);
