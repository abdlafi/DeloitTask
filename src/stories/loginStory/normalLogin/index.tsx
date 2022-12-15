import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
import {t} from 'i18next';
import {changeLanguage} from '@shared/utils';
const LoginStory = () => {
  const users = useSelector(usersStore);
  const [eyeOn, setEyeOn] = useState(false);
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>{t('login.ReadyToEnjoy')}</Text>
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
                {t('login.Email')}
              </Text>
              <View style={styles.action}>
                <FontAwesome name="envelope-o" color={colors.black} size={20} />
                <TextInput
                  value={values.email}
                  placeholder={t('login.Email') ?? ''}
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
                {t('login.Passowrd')}
              </Text>
              <View style={styles.action}>
                <FontAwesome name="lock" color={colors.black} size={20} />
                <TextInput
                  value={values.password}
                  secureTextEntry={!eyeOn}
                  placeholder={t('login.Passowrd') ?? ''}
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
              <View />
              <TouchableOpacity
                onPress={changeLanguage}
                style={styles.languageContainer}>
                <Text>{t('language') ?? ''}</Text>
              </TouchableOpacity>
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
                    <Text style={[styles.textSign]}>{t('login.Login')}</Text>
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
                    {t('login.SignUp')}
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
