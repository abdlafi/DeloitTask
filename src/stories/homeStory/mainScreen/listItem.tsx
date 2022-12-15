import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const flatListRender = ({item}) => {
  return (
    <View style={styles.flatListItemContainer}>
      <Text style={styles.taskItem}>{item.task}</Text>
    </View>
  );
};

export const sectionListRender = ({section}) => {
  return (
    <View style={styles.sectionListItemContainer}>
      <Text style={styles.sectionTaskItem}>{section.title}</Text>
    </View>
  );
};
