/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScreenWidth} from '@shared/utils';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import BGHeader from '@assets/svgs/bgHeader.svg';
interface BlueHeaderProps {}
const aspectRatio = 377 / 294;
const BlueHeader = (props: BlueHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* <BGHeader width={'100%'} height={'100%'} viewBox="0 0 377 294" /> */}
    </View>
  );
};

export default BlueHeader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: ScreenWidth,
    aspectRatio,
  },
});
