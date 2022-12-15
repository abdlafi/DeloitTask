import * as React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  StatusBar,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import colors from '@shared/utils/colors';
import {ScreenHeight} from '@shared/utils';
import Icons from 'react-native-vector-icons/AntDesign';
import {navigationRef} from '@routes/navigation';
interface TobNavBarProps {
  title?: string;
  rightIcon?: React.ReactElement;
  hasBottomLine?: boolean;
  hideStatusBar?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  hasBackButton?: boolean;
}

const TobNavBar = (props: TobNavBarProps) => {
  const handleBackButton = () => {
    navigationRef.canGoBack() ? navigationRef.goBack() : null;
  };
  return (
    <View style={[styles.mainContainer, props.containerStyle]}>
      <StatusBar
        backgroundColor={colors.white}
        hidden={props.hideStatusBar ?? false}
      />
      <View style={[styles.container]}>
        {(props.hasBackButton ?? false) && (
          <TouchableOpacity
            onPress={handleBackButton}
            style={styles.backButtonContainer}>
            <Icons name="arrowleft" size={25} />
          </TouchableOpacity>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.title ?? ''}</Text>
        </View>
        <View style={styles.rightIconContainer}>
          {props.rightIcon ? props.rightIcon : <></>}
        </View>
      </View>
      {(props.hasBottomLine ?? false) && (
        <View style={styles.bottomLinseContainer} />
      )}
    </View>
  );
};

export default TobNavBar;

const styles = StyleSheet.create({
  mainContainer: {
    zIndex: 2100,
    marginTop: 30,
  },
  container: {
    height: Platform.OS === 'ios' ? ScreenHeight * 0.06 : ScreenHeight * 0.07,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 15,
    paddingRight: 10,
    zIndex: 2000,
  },
  textContainer: {
    justifyContent: 'center',
    flexGrow: 1,
    flex: 0.8,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingBottom: 2,
    paddingTop: 15,
  },
  backButtonContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  rightIconContainer: {
    paddingHorizontal: 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  text: {textAlign: 'center'},
  bottomLinseContainer: {
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 2,
    //marginBottom: 10,
  },
});
