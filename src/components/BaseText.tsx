import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export type BaseTextType = 'ExtraBold' | 'Bold' | 'SemiBold' | 'Medium';

interface BaseTextProps extends TextProps {
  type?: BaseTextType;
  children: React.ReactNode;
}

const BaseText: React.FC<BaseTextProps> = ({ 
  type = 'Medium', 
  style, 
  children, 
  ...props 
}) => {
  return (
    <Text style={[styles[type], style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  ExtraBold: {
    fontSize: 24,
  },
  Bold: {
    fontSize: 20,
  },
  SemiBold: {
    fontSize: 16,
  },
  Medium: {
    fontSize: 14,
  },
});

export default BaseText;
