import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../stories/splashStory';
import {LoginStackScreens} from './stacks/login';

const nativeStack = createNativeStackNavigator();
const stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

export const currentRoute = () => {
  if (navigationRef.isReady()) {
    return getActiveRouteState(navigationRef.getState());
  } else {
    return setTimeout(() => currentRoute(), 300);
  }
};

export const getActiveRouteState = function (
  route: NavigationState,
): NavigationState {
  if (
    !route?.routes ||
    route?.routes.length === 0 ||
    route?.index >= route?.routes?.length
  ) {
    return route;
  }

  const childActiveRoute = route.routes[
    route?.index
  ] as unknown as NavigationState;
  return getActiveRouteState(childActiveRoute);
};
export const navigate = (stackName = '', screenName, params = {}) => {
  if (navigationRef.isReady()) {
    if (stackName !== '') {
      navigationRef.navigate(
        stackName as never,
        {
          screen: screenName,
          params: params,
        } as never,
      );
    } else {
      navigationRef.navigate(screenName as never, params as never);
    }
  }
};
const NavigationManager = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{
          headerShown: false,
          header: () => null,
          gestureEnabled: false,
        }}>
        <nativeStack.Screen name="SplashScreen" component={SplashScreen} />
        <nativeStack.Screen
          name="LoginStackScreens"
          component={LoginStackScreens}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationManager;
