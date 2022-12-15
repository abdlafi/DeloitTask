import {navigate} from '@routes/navigation';
import {setSecurePassword} from './storageHandler';

export const logOut = async () => {
  await setSecurePassword('', '');
  navigate('LoginStackScreens', 'LoginStory');
};
