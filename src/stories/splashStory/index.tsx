import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {navigate} from '../../routes/navigation';
import {Image} from 'react-native';

import styles from './styles';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(async () => {
      navigate('LoginStackScreens', 'LoginStory');
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
