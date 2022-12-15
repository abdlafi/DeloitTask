import React, {useState} from 'react';
import {
  Alert,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {Formik} from 'formik';
import {usersStore} from '@shared/redux/reducers/user';
import {useSelector} from 'react-redux';
import {validationSchema} from '../validation';
import {setSecurePassword} from '@shared/utils/storageHandler';
const LoginStory = () => {
  const users = useSelector(usersStore);
  const _onSubmit = (values: {email: string; password: string}) => {
    let user = users.data.filter(
      i =>
        i.email.toLowerCase() === values.email.toLowerCase() &&
        i.password === values.password,
    );
    if (user.length > 0) {
      setSecurePassword(values.email, values.password);
      navigate('HomeStackScreens', 'HomeStory');
    } else {
      Alert.alert('wrong username or password');
    }
  };
  const [eyeOn, setEyeOn] = useState(false);
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
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={_onSubmit}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <>
              <Text style={[styles.text_footer, styles.passwordTextFooter]}>
                Email
              </Text>
              <View style={styles.action}>
                <FontAwesome name="envelope-o" color={colors.black} size={20} />
                <TextInput
                  value={values.email}
                  placeholder="Email"
                  placeholderTextColor="#666666"
                  style={[styles.textInput]}
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  // onEndEditing={() => setFieldTouched('email')}
                />
                {touched.email && !errors.email ? (
                  <Animatable.View entering={BounceIn}>
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {touched.email && errors.email && (
                <Animatable.View entering={FadeInLeft}>
                  <Text style={styles.errorMsg}>{errors.email}</Text>
                </Animatable.View>
              )}

              <Text style={[styles.text_footer, styles.passwordTextFooter]}>
                Passowrd
              </Text>
              <View style={styles.action}>
                <FontAwesome name="lock" color={colors.black} size={20} />
                <TextInput
                  value={values.password}
                  secureTextEntry={!eyeOn}
                  placeholder="Passowrd"
                  placeholderTextColor="#666666"
                  style={[styles.textInput]}
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  // onEndEditing={() => setFieldTouched('phoneNumber')}
                />
                <TouchableOpacity onPress={() => setEyeOn(!eyeOn)}>
                  {!eyeOn ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Animatable.View entering={FadeInLeft}>
                  <Text style={styles.errorMsg}>{errors.password}</Text>
                </Animatable.View>
              )}
              <View style={styles.button}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={styles.Submit}
                  onPress={handleSubmit}>
                  <LinearGradient
                    colors={
                      isValid
                        ? [colors.secondaryBlue, colors.primaryBlue]
                        : [colors.disabledGray, colors.disabledGray]
                    }
                    style={styles.Submit}>
                    <Text style={[styles.textSign]}>Login</Text>
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
            </>
          )}
        </Formik>
      </Animatable.View>
    </View>
  );
};

export default LoginStory;
