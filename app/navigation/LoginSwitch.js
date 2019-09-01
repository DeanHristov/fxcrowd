import {createSwitchNavigator} from 'react-navigation';

import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';


const RouteConfigs = {
  HomeScreen,
  LoginScreen,
};
const NavigatorConfig = {
  initialRouteName: 'LoginScreen',
  defaultNavigationOptions: {
    header: null,
  },
};
export default createSwitchNavigator(
  RouteConfigs,
  NavigatorConfig,
);
