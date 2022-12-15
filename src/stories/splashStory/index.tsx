/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {navigate} from '@routes/navigation';
import {Image} from 'react-native';

import styles from './styles';
import {useAppDispatch} from '@shared/redux/store';
import {getSecurePassword} from '@shared/utils/storageHandler';
import {filluserData} from '@shared/redux/reducers/userData';
import {useSelector} from 'react-redux';
import {usersStore} from '@shared/redux/reducers/user';
import {Alert} from 'react-native';
import {logOut} from '@shared/utils/userManagment';

const SplashScreen = () => {
  const users = useSelector(usersStore);
  const dispatch = useAppDispatch();
  const compleateProccess = async () => {
    let savedUserData = await getSecurePassword();
    if (!savedUserData) {
      logOut();
    }
    let {password, username} = savedUserData as {
      password: string;
      username: string;
    };
    let userData = users.data.filter(
      i => i.email.toLowerCase() === username && i.password === password,
    );
    if (userData.length > 0) {
      dispatch(filluserData({...userData[0]}));
      navigate('HomeStackScreens', 'HomeStory');
    } else {
      Alert.alert('you need to login');
      logOut();
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      await compleateProccess();
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/deloitteicon.png')}
      />
    </View>
  );
};

export default SplashScreen;
