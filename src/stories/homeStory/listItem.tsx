/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const flatListRender = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        borderWidth: 0.4,
        margin: 10,
        backgroundColor: '#F0F0F0',
      }}>
      <Text style={styles.taskItem}>{item.task}</Text>
    </View>
  );
};

export const sectionListRender = ({section}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        borderWidth: 0.4,
        margin: 10,
        backgroundColor: '#E4E2E2',
      }}>
      <Text style={styles.sectionTaskItem}>{section.title}</Text>
    </View>
  );
};
