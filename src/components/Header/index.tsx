import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { Button } from '../Button';
import { styleTypography, SCREEN_WIDTH, Colors } from '../../constants';
import { filterLayoutProps } from '../../utils';

interface IHeader {
  title?: string;
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  styleIconLeft?: StyleProp<ViewStyle>;
  styleIconRight?: StyleProp<ViewStyle>;
  isIcRight?: boolean;
  isIcLeft?: boolean;
  renderIcRight?: React.ReactNode;
  renderIcLeft?: React.ReactNode;
  backgroundColorStatusBar?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
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
    backgroundColorStatusBar = Colors.bg_brand_over_dark,
    barStyle = 'dark-content',
    onPressIcLeft,
    onPressIcRight,
    ...rest
  } = props;

  const viewProps = filterLayoutProps(rest);
  const textProps = filterLayoutProps(rest);
  const imageProps = filterLayoutProps(rest);
  const touchableProps = filterLayoutProps(rest);

  const iconAreaWidth = 50;

  return (
    <View>
      <StatusBar
        backgroundColor={backgroundColorStatusBar}
        barStyle={barStyle}
      />
      <View style={[styles.container, style]} {...viewProps.otherProps}>
        {isIcLeft && (
          <Button
            onPress={onPressIcLeft}
            style={[styles.iconButtonBase, styles.iconLeft, styleIconLeft]}
            {...touchableProps.otherProps}
          >
            {renderIcLeft ? (
              renderIcLeft
            ) : (
              <Image
                style={styles.icon}
                source={require('../../assets/arrow-left.png')}
                {...imageProps.otherProps}
              />
            )}
          </Button>
        )}

        <Text
          style={[
            styleTypography({ lh: 24, s: 18, w: '500' }),
            styles.title,
            { paddingHorizontal: iconAreaWidth },
            styleTitle,
          ]}
          numberOfLines={1}
          ellipsizeMode="tail"
          {...textProps.otherProps}
        >
          {title}
        </Text>

        {isIcRight && (
          <Button
            onPress={onPressIcRight}
            style={[styles.iconButtonBase, styles.iconRight, styleIconRight]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg_brand_over_light,
    width: SCREEN_WIDTH,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  iconButtonBase: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconLeft: {
    left: 0,
  },
  iconRight: {
    right: 0,
  },
  title: {
    flex: 1,
    color: Colors.bg_brand_over_dark,
    textAlign: 'center',
    // width: SCREEN_WIDTH - 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
