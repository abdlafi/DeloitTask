import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Form from '@stories/registrationStory/form';
import Password from '@stories/registrationStory/password';

const stack = createNativeStackNavigator();
export function RegistrationStackScreens() {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Form" component={Form} />
      <stack.Screen name="Password" component={Password} />
    </stack.Navigator>
  );
}
