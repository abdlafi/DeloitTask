/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import RoutesManager from './src/routes';
AppRegistry.registerComponent(appName, () => RoutesManager);
