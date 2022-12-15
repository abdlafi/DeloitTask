import i18n from '@shared/translations';
import {Dimensions, I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {getLanguage} from './storageHandler';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export const DateFormat = 'YYYY-MM-DD';

export const changeLanguage = async () => {
  var currentLanguage = await getLanguage();
  i18n.changeLanguage(currentLanguage === 'ar' ? 'en' : 'ar', () => {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(currentLanguage !== 'ar');
    RNRestart.Restart();
  });
};
