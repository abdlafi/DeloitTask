import React, {useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@shared/utils/colors';
import Animatable, {
  BounceIn,
  BounceInDown,
  FadeInLeft,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {navigate} from '@routes/navigation';
const HomeStory = () => {
  const [data, setData] = useState({} as any);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryBlue}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        entering={BounceInDown}
        style={[
          styles.footer,
          {
            backgroundColor: colors.white,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.black,
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.black} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
            // onChangeText={val => textInputChange(val)}
            // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View entering={BounceIn}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View entering={FadeInLeft}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, styles.passwordTextFooter]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.black} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.black,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={() => {}}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View entering={FadeInLeft}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              // loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={[colors.secondaryBlue, colors.primaryBlue]}
              style={styles.signIn}>
              <Text style={[styles.textSign]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('RegistrationStackScreens', 'Form')}
            style={[styles.signUp]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.primaryBlue,
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default HomeStory;
