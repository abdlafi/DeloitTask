import {TextInputProps, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import DText from '../DText';
type Props = TextInputProps & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};
const DTextInput = (props: Props) => {
  return (
    <View>
      <DText> Title </DText>
      <View style={[styles.container]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {props.leftIcon ? props.leftIcon : null}
          <TextInput {...props} style={[props.style, styles.textInput]} />
          {props.rightIcon ? props.rightIcon : null}
        </View>
      </View>
    </View>
  );
};

export default DTextInput;
