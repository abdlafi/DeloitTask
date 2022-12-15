import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@shared/utils/colors';
import Animatable, {BounceIn, FadeInLeft} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {validationSchema} from './validation';
import {ScreenWidth} from '@shared/utils';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {navigate, navigationRef} from '@routes/navigation';
import {useSelector} from 'react-redux';
import {fillusers, usersStore} from '@shared/redux/reducers/user';
import {useAppDispatch} from '@shared/redux/store';
import {Alert} from 'react-native';
const Password = ({route}) => {
  /*
     values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  */
  const userID = route?.params?.userID ?? '';
  const users = useSelector(usersStore);
  const dispatch = useAppDispatch();
  const _onSubmit = (values: {password: string; confirmPassowrd: string}) => {
    let user = users.data.filter(i => i.id === userID);
    if (user.length > 0) {
      dispatch(
        fillusers({
          ...user[0],
          password: values.password,
          needToSetPassword: false,
        }),
      );
      navigate('HomeStackScreens', 'HomeStory');
    } else {
      Alert.alert('user doesnt exist');
      navigate('LoginStackScreens', 'LoginStory');
    }
  };
  const [eyeOn, setEyeOn] = useState(false);
  useEffect(() => {
    if (userID === '') {
      navigationRef.canGoBack() ? navigationRef.goBack() : null;
    }
  }, [userID]);
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <FastImage
          source={require('@assets/images/deloitteicon.png')}
          style={{width: ScreenWidth / 3, height: ScreenWidth / 3}}
        />
      </View>
      <Formik
        initialValues={{
          password: '',
          confirmPassowrd: '',
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
              Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color={colors.black} size={20} />
              <TextInput
                value={values.password}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                // onEndEditing={() => setFieldTouched('email')}
              />
              {touched.password && !errors.password ? (
                <Animatable.View entering={BounceIn}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {touched.password && errors.password && (
              <Animatable.View entering={FadeInLeft}>
                <Text style={styles.errorMsg}>{errors.password}</Text>
              </Animatable.View>
            )}

            <Text style={[styles.text_footer, styles.passwordTextFooter]}>
              Confirm passowrd
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color={colors.black} size={20} />
              <TextInput
                value={values.confirmPassowrd}
                secureTextEntry={!eyeOn}
                placeholder="Confirm passowrd"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={handleChange('confirmPassowrd')}
                onBlur={() => setFieldTouched('confirmPassowrd')}
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
            {touched.confirmPassowrd && errors.confirmPassowrd && (
              <Animatable.View entering={FadeInLeft}>
                <Text style={styles.errorMsg}>{errors.confirmPassowrd}</Text>
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
                  <Text style={[styles.textSign]}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Password;
