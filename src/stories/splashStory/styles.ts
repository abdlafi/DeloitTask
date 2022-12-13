import {StyleSheet} from 'react-native';
import {ScreenWidth} from '../../shared/utils';
import colors from '../../shared/utils/colors';
const aspectRatio = 375 / 812;

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    backgroundColor: colors.black,
    aspectRatio,
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
  image: {
    width: ScreenWidth * 0.4,
    height: ScreenWidth * 0.4,
  },
});
