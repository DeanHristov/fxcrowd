import {
  createAppContainer, createSwitchNavigator
} from 'react-navigation';

import LoginSwitch from './LoginSwitch';

const navConfig = {};
const routesSetup = {
  LoginSwitch,
};

export default createAppContainer(
  createSwitchNavigator(
    routesSetup,
    navConfig,
  ),
);
