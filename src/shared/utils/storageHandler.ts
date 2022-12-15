import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
export const getLanguage = async () => {
  return (await AsyncStorage.getItem('language')) ?? '';
};
export const setLanguage = async (value: string = '') => {
  return await AsyncStorage.setItem('language', value);
};

export const setSecurePassword = async (email: string, password: string) => {
  return await Keychain.setGenericPassword(email, password);
};

export const getSecurePassword = async () => {
  return await Keychain.getGenericPassword();
};

export const resetSecurePassword = async () => {
  return await Keychain.resetGenericPassword();
};
