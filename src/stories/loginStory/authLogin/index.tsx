import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@shared/utils/colors';
import Animatable, {BounceIn, FadeInLeft} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {validationSchema} from './validation';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {DateFormat, ScreenWidth} from '@shared/utils';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {navigate, navigationRef} from '@routes/navigation';
import uuid from 'react-native-uuid';
import {useAppDispatch} from '@shared/redux/store';
import {fillusers, usersStore} from '@shared/redux/reducers/user';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
const AuthLogin = () => {
  /*
     values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  */
  const users = useSelector(usersStore);
  const dispatch = useAppDispatch();
  const _onSubmit = (values: {
    email: string;
    dateOfBirth: string;
    phoneNumber: string;
  }) => {
    if (
      users.data.filter(i =>
        i.email.toLowerCase().includes(String(values.email).toLowerCase()),
      ).length > 0
    ) {
      Alert.alert('user already exist');
    } else {
      var userID = uuid.v4();
      dispatch(
        fillusers({
          id: userID.toString(),
          email: values.email,
          phoneNumber: values.phoneNumber,
          dateOfBirth: values.dateOfBirth,
          password: '',
          needToSetPassword: true,
        }),
      );
      navigate('RegistrationStackScreens', 'Password', {userID});
    }
  };
  const [datePicker, setDatePicker] = useState(false);

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
          email: '',
          dateOfBirth: '',
          phoneNumber: '',
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
          setFieldValue,
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
              Phone number
            </Text>
            <View style={styles.action}>
              <FontAwesome name="phone" color={colors.black} size={20} />
              <TextInput
                value={values.phoneNumber}
                placeholder="Phone Number"
                placeholderTextColor="#666666"
                style={[styles.textInput]}
                autoCapitalize="none"
                onChangeText={handleChange('phoneNumber')}
                onBlur={() => setFieldTouched('phoneNumber')}
                // onEndEditing={() => setFieldTouched('phoneNumber')}
              />
              {touched.email && !errors.phoneNumber ? (
                <Animatable.View entering={BounceIn}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {touched.email && errors.phoneNumber && (
              <Animatable.View entering={FadeInLeft}>
                <Text style={styles.errorMsg}>{errors.phoneNumber}</Text>
              </Animatable.View>
            )}

            <Text style={[styles.text_footer, styles.passwordTextFooter]}>
              Date Of Birth
            </Text>
            <TouchableOpacity
              activeOpacity={0.3}
              style={styles.action}
              onPress={() => {
                setDatePicker(true);
              }}>
              <FontAwesome
                name="calendar-check-o"
                color={colors.black}
                size={20}
              />
              <Text style={[styles.textInput]}>
                {values.dateOfBirth !== ''
                  ? moment(values.dateOfBirth).format(DateFormat)
                  : 'Date of birth'}
              </Text>
            </TouchableOpacity>
            {errors.dateOfBirth && (
              <Animatable.View entering={FadeInLeft}>
                <Text style={styles.errorMsg}>{errors.dateOfBirth}</Text>
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
              <TouchableOpacity
                onPress={() =>
                  navigationRef.canGoBack() ? navigationRef.goBack() : null
                }
                style={[styles.signUp]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: colors.primaryBlue,
                    },
                  ]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              mode="date"
              open={datePicker}
              date={
                values.dateOfBirth !== ''
                  ? new Date(values.dateOfBirth)
                  : new Date()
              }
              onConfirm={date => {
                setFieldValue(
                  'dateOfBirth',
                  moment(date).format(DateFormat).toString(),
                );
                setDatePicker(false);
                setFieldTouched('dateOfBirth');
              }}
              onCancel={() => {
                setDatePicker(false);
                // setFieldTouched('dateOfBirth');
              }}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default AuthLogin;
