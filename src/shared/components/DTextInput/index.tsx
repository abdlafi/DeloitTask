import {TextInputProps, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
type Props = TextInputProps & {};
const DTextInput = (props: Props) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <View style={[styles.container, onFocus ? styles.focusedBorder : null]}>
      <TextInput
        {...props}
        style={[props.style, styles.textInput]}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </View>
  );
};

export default DTextInput;
