import {StyleSheet} from 'react-native';
import {ScreenWidth} from '../../utils';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    height: ScreenWidth * 0.13,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 0.3,
  },
  textInput: {
    width: '80%',
    fontSize: 17,
    marginHorizontal: 10,
    color: colors.black,
  },
  focusedBorder: {
    borderWidth: 1,
  },
});
