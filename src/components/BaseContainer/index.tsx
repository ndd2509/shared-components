import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
  type ColorValue,
  type TextStyle,
  type ViewStyle,
  type KeyboardAvoidingViewProps,
  Text,
} from 'react-native';
import { type ReactNode } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface IBaseContainer {
  title?: string;
  center?: ReactNode;
  right?: ReactNode;
  left?: ReactNode;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  onPressCenter?: () => void;
  styleTitle?: TextStyle;
  isHeader?: boolean;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  children: ReactNode;
  style?: ViewStyle;
  styleHeader?: ViewStyle;
  backgroundColorStatusBar?: ColorValue | undefined;
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
  keyboardAvoidingViewProps?: Omit<KeyboardAvoidingViewProps, 'children'>;
}

export const BaseContainer = ({
  style,
  title,
  left,
  right,
  center,
  onPressLeft,
  onPressRight,
  onPressCenter,
  styleTitle,
  isHeader,
  children,
  backgroundColorStatusBar,
  barStyle,
  styleHeader,
  edges,
  keyboardAvoidingViewProps,
}: IBaseContainer) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      {...keyboardAvoidingViewProps}
    >
      <View style={styles.container}>
        <StatusBar
          backgroundColor={backgroundColorStatusBar}
          barStyle={barStyle}
        />
        <SafeAreaView style={[styles.safeView, style]} edges={edges}>
          {isHeader && (
            <View style={[styles.header, styleHeader]}>
              {left ? (
                <TouchableOpacity disabled={!onPressLeft} onPress={onPressLeft}>
                  {left}
                </TouchableOpacity>
              ) : (
                <View />
              )}
              {center ? (
                <TouchableOpacity
                  disabled={!onPressCenter}
                  onPress={onPressCenter}
                >
                  {center}
                </TouchableOpacity>
              ) : title ? (
                <Text style={styleTitle}>{title}</Text>
              ) : (
                <View />
              )}
              {right ? (
                <TouchableOpacity
                  disabled={!onPressRight}
                  onPress={onPressRight}
                >
                  {right}
                </TouchableOpacity>
              ) : (
                <View />
              )}
            </View>
          )}
          {children}
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};
