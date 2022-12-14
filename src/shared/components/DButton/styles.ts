import {StyleSheet} from 'react-native';
import {ScreenWidth} from '../../utils';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.4,
    height: ScreenWidth * 0.3,
    backgroundColor: colors.primaryBlue,
  },
  buttonSolid: {
    backgroundColor: colors.primaryBlue,
    height: 48,
    borderRadius: 15,
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    height: 48,
    borderColor: colors.outlineBlue,
    borderRadius: 15,
  },
  titleSolid: {
    color: colors.white,
  },
  titleOutlined: {
    color: colors.outlineBlue,
  },
  disabled: {
    backgroundColor: colors.disabledGray,
  },
  disabledTitle: {
    color: colors.white,
  },
  shadow: {
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 3,
    elevation: 15,
    borderRadius: 15,
    shadowColor: colors.primaryBlue,
    backgroundColor: colors.white,
    borderWidth: 1,
  },
});
