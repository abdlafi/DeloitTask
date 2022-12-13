import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import DTextInput from '../../shared/components/DTextInput';
import DButton from '../../shared/components/DButton';
const LoginStory = () => {
  return (
    <View style={styles.container}>
      <DTextInput placeholder={'user name'} />
      <DTextInput placeholder={'password'} />
      <DButton
        title="Login"
        type=""
        onPress={() => {
          console.log('====================================');
          console.log('ddd');
          console.log('====================================');
        }}
      />
    </View>
  );
};

export default LoginStory;
