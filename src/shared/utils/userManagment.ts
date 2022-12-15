import {navigate} from '@routes/navigation';
import {resetSecurePassword} from './storageHandler';

export const logOut = async () => {
  await resetSecurePassword();
  navigate('LoginStackScreens', 'LoginStory');
};
