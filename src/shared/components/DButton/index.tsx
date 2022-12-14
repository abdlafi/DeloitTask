import React from 'react';
import {View, Button, ButtonProps} from 'react-native';
import {ScreenWidth} from 'shared/utils';
import colors from 'shared/utils/colors';
import styles from './styles';

export type Props = ButtonProps & {
  type: 'solid' | 'clear' | 'outline';
};

const DButton = (props: Props) => {
  return (
    <View
      style={[
        styles.shadow,
        {
          shadowColor: props.disabled ? colors.black : colors.primaryBlue,
          width: ScreenWidth * 0.68,
          alignSelf: 'center',
        },
      ]}>
      <Button
        title={props.title ?? ''}
        disabled={props.disabled}
        onPress={props.onPress}
        // type={props.type}
      />
    </View>
  );
};

export default DButton;
