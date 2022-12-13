import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLanguage = async () => {
  return (await AsyncStorage.getItem('language')) ?? '';
};
export const setLanguage = async (value: string = '') => {
  return await AsyncStorage.setItem('language', value);
};
