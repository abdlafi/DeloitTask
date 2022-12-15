import {ScreenHeight, ScreenWidth} from '@shared/utils';
import colors from '@shared/utils/colors';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA',
    height: ScreenHeight / 16,
    width: ScreenWidth * 0.8,
    borderRadius: 15,
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'center',
    // left: 10,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  fieldContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchField: {
    flex: 1,
    flexGrow: 1,
  },
  xContainer: {justifyContent: 'center'},
  xIcon: {
    alignSelf: 'center',
    color: colors.disabledGray,
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: 'center',
    color: colors.disabledGray,
  },
});
