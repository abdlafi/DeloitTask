/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {Tasks} from './config';
import {flatListRender, sectionListRender} from './listItem';
import styles from './styles';
const HomeStory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <SectionList
        sections={Tasks ?? []}
        renderItem={flatListRender}
        ListFooterComponent={<View style={{marginBottom: 95}} />}
        renderSectionHeader={sectionListRender}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

export default HomeStory;
