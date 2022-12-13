import React from 'react';
// import styles from './styles';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export type Props = FastImageProps & {};

const DImage = (props: Props) => {
  return <FastImage {...props} />;
};

export default DImage;
