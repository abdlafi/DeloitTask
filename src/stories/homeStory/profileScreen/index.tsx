import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '@shared/utils/colors';
import {ScreenWidth} from '@shared/utils';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {logOut} from '@shared/utils/userManagment';
import {userDataStore} from '@shared/redux/reducers/userData';
import TobNavBar from '@shared/components/DTobNavBar';
const ProfileScreen = () => {
  const {data} = useSelector(userDataStore);
  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <View style={[styles.container]}>
        <TobNavBar title="Profile" hasBottomLine={false} hasBackButton />

        <View>
          <View style={styles.imageContainer}>
            <FastImage
              source={require('@assets/images/deloitteicon.png')}
              style={{width: ScreenWidth / 3, height: ScreenWidth / 3}}
            />
          </View>

          <Text style={[styles.text_footer, styles.passwordTextFooter]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.black} size={20} />
            <TextInput
              editable={false}
              value={data.email}
              placeholder="Email"
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
            />
          </View>

          <Text style={[styles.text_footer, styles.passwordTextFooter]}>
            Phone number
          </Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color={colors.black} size={20} />
            <TextInput
              editable={false}
              value={data.phoneNumber}
              placeholder="Phone Number"
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
              // onEndEditing={() => setFieldTouched('phoneNumber')}
            />
          </View>

          <Text style={[styles.text_footer, styles.passwordTextFooter]}>
            Date Of Birth
          </Text>
          <View style={styles.DOBContrainer}>
            <FontAwesome
              name="calendar-check-o"
              color={colors.black}
              size={20}
            />
            <Text style={styles.textInput}>{data.dateOfBirth}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={handleLogout} style={[styles.signUp]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.primaryBlue,
                  },
                ]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
