import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';
import DText from '../DText';
import styles from './styles';

export type Props = TouchableOpacityProps & {};

const DButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <DText>Text</DText>
    </TouchableOpacity>
  );
};

export default DButton;
