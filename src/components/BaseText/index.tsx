import React from 'react';
import { Text, StyleSheet, type TextProps } from 'react-native';

export type BaseTextType = 'ExtraBold' | 'Bold' | 'SemiBold' | 'Medium';

export interface BaseTextProps extends TextProps {
  type?: BaseTextType;
  size?: number;
  children: React.ReactNode;
}

export const BaseText: React.FC<BaseTextProps> = ({
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
  ExtraBold: {
    fontWeight: '700',
  },
  Bold: {
    fontWeight: '600',
  },
  SemiBold: {
    fontWeight: '500',
  },
  Medium: {
    fontWeight: '400',
  },
});
