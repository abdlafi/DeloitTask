import {DSearchField} from '@shared/components/DSearchField';
import TobNavBar from '@shared/components/DTobNavBar';
import React, {useEffect, useState} from 'react';
import {SectionList, TouchableOpacity, View} from 'react-native';
import {Tasks} from './config';
import {flatListRender, sectionListRender} from './listItem';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import {navigate} from '@routes/navigation';
const HomeStory = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(Tasks);
  useEffect(() => {
    searchHnadler(search ?? '');
  }, [search]);

  const searchHnadler = async searchText => {
    let list = [] as any;
    await Tasks.forEach(item => {
      list = [
        ...list,
        {
          ...item,
          data: item.data.filter(
            i =>
              searchText === '' ||
              i.task.toLowerCase().includes(searchText.toLowerCase()),
          ),
        },
      ];
    });
    setData(list);
  };
  const handleProfilePress = () => {
    navigate(undefined, 'ProfileScreen');
  };
  const renderProfileIcon = (
    <TouchableOpacity onPress={handleProfilePress}>
      <Icon name="person" size={20} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TobNavBar
        title="Home Screen"
        rightIcon={renderProfileIcon}
        hasBottomLine={false}
      />
      <View style={styles.header}>
        <DSearchField searchText={search} setSearchText={setSearch} />
      </View>
      <View style={styles.sctionListContainer}>
        <SectionList
          sections={data}
          renderItem={flatListRender}
          ListFooterComponent={<View style={styles.footerSectionList} />}
          renderSectionHeader={sectionListRender}
          keyExtractor={item => item.id}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </View>
  );
};

export default HomeStory;
