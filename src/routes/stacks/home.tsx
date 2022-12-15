import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStory from '../../stories/homeStory';

const stack = createNativeStackNavigator();
export function HomeStackScreens() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="HomeStory" component={HomeStory} />
    </stack.Navigator>
  );
}
