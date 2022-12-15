import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStory from '@stories/homeStory/mainScreen';
import ProfileScreen from '@stories/homeStory/profileScreen';

const stack = createNativeStackNavigator();
export function HomeStackScreens() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="HomeStory" component={HomeStory} />
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </stack.Navigator>
  );
}
