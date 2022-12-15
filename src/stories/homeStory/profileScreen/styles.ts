import {ScreenWidth} from '@shared/utils';
import colors from '@shared/utils/colors';
import {Platform, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  passwordTextFooter: {
    color: colors.black,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.errorRed,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: colors.black,
  },
  DOBContrainer: {flexDirection: 'row'},
  errorMsg: {
    color: colors.errorRed,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  Submit: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 1,
    marginTop: 15,
  },
  forgetPassword: {color: colors.primaryBlue, marginTop: 15},
  imageContainer: {
    width: ScreenWidth,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
