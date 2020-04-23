import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import StackNavigation from './StackNavigation';

const MainNavigation = StackNavigation;

export default createAppContainer(MainNavigation);
