import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStory from '../../stories/loginStory';

const stack = createNativeStackNavigator();
export function LoginStackScreens() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="LoginStory" component={LoginStory} />
    </stack.Navigator>
  );
}
