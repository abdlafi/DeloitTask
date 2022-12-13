import React from 'react';
import {Text, TextProps} from 'react-native';

export type Props = TextProps & {};

const DText = (props: Props) => {
  return <Text {...props} />;
};

export default DText;
