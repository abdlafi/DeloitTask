import React from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '@shared/utils/colors';
import styles from './styles';
interface SearchFieldProps {
  searchText: string;
  setSearchText: (text) => void;
  style?: ViewStyle;
}

export const DSearchField = ({searchText, setSearchText}: SearchFieldProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Icon
          name="search"
          size={20}
          color={colors.disabledGray}
          style={styles.icon}
        />
        <TextInput
          placeholder={'Search'}
          style={styles.searchField}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <View style={styles.xContainer}>
          {searchText !== '' && (
            <Icon
              name="x"
              style={styles.xIcon}
              size={25}
              onPress={() => setSearchText('')}
            />
          )}
        </View>
      </View>
    </View>
  );
};
