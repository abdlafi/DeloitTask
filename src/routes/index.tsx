import * as React from 'react';
import {useEffect} from 'react';
import {
  LogBox,
  StatusBar,
  Platform,
  I18nManager as RNI18nManager,
} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {withTranslation} from 'react-i18next';
import {persistor, store} from '../shared/redux/store';
import {Provider} from 'react-redux';
import NavigationManager from './navigation';
import i18n from '../../src/shared/translations';
import RNRestart from 'react-native-restart';
const statusBar = {
  ios: <StatusBar animated={true} translucent={true} hidden={false} />,
  android: (
    <StatusBar
      animated={false}
      translucent={true}
      backgroundColor={'transparent'}
      hidden={false}
    />
  ),
};

const RoutesManager = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
      "EventEmitter.removeListener('change', ...)",
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
      'Require cycle: ',
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);
  useEffect(() => {
    i18n
      .init()
      .then(async () => {
        const RNDir = RNI18nManager.isRTL ? 'rtl' : 'ltr';
        if (i18n.dir() !== RNDir) {
          const isLocaleRTL = i18n.dir() === 'rtl';
          RNI18nManager.forceRTL(isLocaleRTL);
          RNRestart.Restart();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {statusBar[Platform.OS.toString()]}
        <NavigationManager />
      </PersistGate>
    </Provider>
  );
};
export default withTranslation()(RoutesManager);
