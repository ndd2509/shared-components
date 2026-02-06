import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export type BaseTextType = 'ExtraBold' | 'Bold' | 'SemiBold' | 'Medium';

interface BaseTextProps extends TextProps {
  type?: BaseTextType;
  size?: number;
  children: React.ReactNode;
}

const BaseText: React.FC<BaseTextProps> = ({
  type = 'Medium',
  size,
  style,
  children,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[styles[type], { fontSize: size }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  ExtraBold: {},
  Bold: {},
  SemiBold: {},
  Medium: {},
});

export default BaseText;
