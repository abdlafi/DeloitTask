import colors from '@shared/utils/colors';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.1,
    top: 0,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  taskItem: {
    padding: 5,
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 16,
  },
  sectionTaskItem: {
    padding: 10,
    marginVertical: 20,
    fontSize: 16,
    // textAlign: 'center',
  },
  sctionListContainer: {flex: 0.9},
  footerSectionList: {marginBottom: 95},
  flatListItemContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.4,
    margin: 10,
    backgroundColor: colors.white,
  },
  sectionListItemContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
