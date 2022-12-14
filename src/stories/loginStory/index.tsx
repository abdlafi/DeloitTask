import DTextInput from '@shared/components/DTextInput';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '@shared/utils/colors';
const LoginStory = () => {
  const lockIcon = () => {
    return <AntDesign name="lock" size={23} color={colors.black} />;
  };
  return (
    <View style={styles.container}>
      <DTextInput rightIcon={lockIcon()} placeholder={'user name'} />
      <DTextInput rightIcon={lockIcon()} placeholder={'password'} />
      {/* <DButton
        onPress={() => {
          console.log('====================================');
          console.log('ddd');
          console.log('====================================');
        }}
      /> */}
    </View>
  );
};

export default LoginStory;
