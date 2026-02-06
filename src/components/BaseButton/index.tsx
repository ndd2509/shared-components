import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
  type TouchableOpacityProps,
} from 'react-native';
import BaseText, { type BaseTextType } from '../BaseText';
import { Colors } from '../../constants/Colors';

export type ButtonVariant = 'primary' | 'link-subtle' | 'red' | 'brand-subtle';
export type ButtonSize = 'small' | 'regular' | 'large';
export type ButtonType = 'common' | 'icon';

interface BaseButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  // Type
  type?: ButtonType;

  // Variant
  variant?: ButtonVariant;

  // Size
  size?: ButtonSize;

  // Content
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';

  // State
  loading?: boolean;

  // Style
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  type = 'common',
  variant = 'primary',
  size = 'regular',
  label,
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  // Get size-specific styles
  const sizeStyle = styles[`size_${size}`];
  const textSizeStyle = styles[`text_${size}`];

  // Get variant-specific styles
  const variantStyle = disabled
    ? styles.variant_disabled
    : styles[`variant_${variant}`];

  const textVariantStyle = disabled
    ? styles.text_disabled
    : styles[`text_variant_${variant}`];

  // Get text type based on size
  const getTextType = (): BaseTextType => {
    switch (size) {
      case 'small':
        return 'Medium';
      case 'regular':
        return 'SemiBold';
      case 'large':
        return 'Bold';
      default:
        return 'SemiBold';
    }
  };

  // Get text size based on size
  const getTextSize = (): number => {
    switch (size) {
      case 'small':
        return 14;
      case 'regular':
        return 16;
      case 'large':
        return 20;
      default:
        return 16;
    }
  };

  // Icon only button
  if (type === 'icon') {
    return (
      <TouchableOpacity
        disabled={disabled || loading}
        activeOpacity={0.7}
        style={[
          styles.baseButton,
          styles.iconButton,
          sizeStyle,
          variantStyle,
          style,
        ]}
        {...props}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              disabled
                ? Colors.text_disabled_tertiary_light
                : variant === 'primary' || variant === 'red'
                ? Colors.text_inverse_primary_light
                : Colors.text_brand_primary
            }
          />
        ) : (
          icon
        )}
      </TouchableOpacity>
    );
  }

  // Common button with text
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[styles.baseButton, sizeStyle, variantStyle, style]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            disabled
              ? Colors.text_disabled_tertiary_light
              : variant === 'primary' || variant === 'red'
              ? Colors.text_inverse_primary_light
              : Colors.text_brand_primary
          }
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {label && (
            <BaseText
              type={getTextType()}
              size={getTextSize()}
              style={[textSizeStyle, textVariantStyle, textStyle]}
            >
              {label}
            </BaseText>
          )}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  iconButton: {
    aspectRatio: 1,
  },

  // Size styles
  size_small: {
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  size_regular: {
    height: 42,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  size_large: {
    height: 60,
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 12,
    gap: 12,
  },

  // Variant styles - Background & Border
  variant_primary: {
    backgroundColor: Colors.bg_brand_primary,
    borderWidth: 0,
  },
  variant_red: {
    backgroundColor: Colors.bg_red_primary,
    borderWidth: 0,
  },
  'variant_link-subtle': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border_brand_primary,
  },
  'variant_brand-subtle': {
    backgroundColor: Colors.bg_brand_tertiary,
    borderWidth: 1,
    borderColor: Colors.border_brand_primary,
  },
  variant_disabled: {
    backgroundColor: Colors.bg_disabled_primary_light,
    borderWidth: 0,
  },

  // Text variant styles
  text_variant_primary: {
    color: Colors.text_inverse_primary_light,
  },
  text_variant_red: {
    color: Colors.text_inverse_primary_light,
  },
  'text_variant_link-subtle': {
    color: Colors.text_brand_primary,
  },
  'text_variant_brand-subtle': {
    color: Colors.text_brand_primary,
  },
  text_disabled: {
    color: Colors.text_disabled_tertiary_light,
  },

  // Text size styles (fallback if BaseText size doesn't work)
  text_small: {
    fontSize: 14,
  },
  text_regular: {
    fontSize: 16,
  },
  text_large: {
    fontSize: 20,
  },
});

export default BaseButton;
