import {
  Image,
  StyleSheet,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-screen-helper';
import { Text } from 'react-native-paper';

import { Button } from '../Button';
import { filterLayoutProps } from '../../utils/helper';
import {
  SCREEN_WIDTH,
  space_squish,
  styleTypography,
} from '../../constants/commonStyles';
import { Colors } from '../../constants/Colors';

interface IHeader {
  title?: string;
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  styleIconLeft?: StyleProp<ViewStyle>;
  styleIconRight?: StyleProp<ViewStyle>;
  isIcRight?: boolean;
  isIcLeft?: boolean;
  renderIcRight?: any;
  renderIcLeft?: any;
  onPressIcLeft?: () => void;
  onPressIcRight?: () => void;
}

export const Header = (props: IHeader) => {
  const {
    title = 'Header',
    isIcRight = false,
    isIcLeft = true,
    style,
    styleIconLeft,
    styleIconRight,
    styleTitle,
    renderIcRight,
    renderIcLeft,
    onPressIcLeft,
    onPressIcRight,
    ...rest
  } = props;

  const viewProps = filterLayoutProps(rest);
  const textProps = filterLayoutProps(rest);
  const imageProps = filterLayoutProps(rest);
  const touchableProps = filterLayoutProps(rest);

  return (
    <View
      style={[
        styles.container,
        space_squish({ horizontal: 16, vertical: 16 }),
        style,
      ]}
      {...viewProps.otherProps}
    >
      {isIcLeft &&
        (renderIcLeft ? (
          <View
            style={[styles.iconLeft, styleIconLeft]}
            {...touchableProps.otherProps}
          >
            {renderIcLeft()}
          </View>
        ) : (
          <Button
            onPress={onPressIcLeft}
            style={[styles.iconLeft, styleIconLeft]}
            {...touchableProps.otherProps}
          >
            <Image
              style={styles.icon}
              source={require('../../assets/arrow-left.png')}
              {...imageProps.otherProps}
            />
          </Button>
        ))}

      <Text
        style={[
          styleTypography({ lh: 24, s: 18, w: '500' }),
          styles.title,
          styleTitle,
        ]}
        numberOfLines={1}
        {...textProps.otherProps}
      >
        {title}
      </Text>

      {isIcRight && (
        <Button
          onPress={onPressIcRight}
          style={[styles.iconRight, styleIconRight]}
          {...touchableProps.otherProps}
        >
          {renderIcRight ? (
            renderIcRight
          ) : (
            <Image
              style={styles.icon}
              source={require('../../assets/arrow-right.png')}
              {...imageProps.otherProps}
            />
          )}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    height: 52 + getStatusBarHeight(),
    backgroundColor: Colors.surface_primary,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    height: '100%',
    width: 20,
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  iconRight: {
    height: '100%',
    width: 40,
    position: 'absolute',
    top: getStatusBarHeight(),
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.txt_ic_primary,
    textAlign: 'center',
    width: SCREEN_WIDTH - 112,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
