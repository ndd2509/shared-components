import { Text, type TextProps, type TextStyle } from 'react-native';
import { useMemo, type ReactNode } from 'react';
import { useTheme } from '../../core';

export const BaseTextTypes = {
  'text12/normal': 'text12/normal',
  'text12/medium': 'text12/medium',
  'text12/semiBold': 'text12/semiBold',
  'text12/bold': 'text12/bold',
  'text14/normal': 'text14/normal',
  'text14/medium': 'text14/medium',
  'text14/semiBold': 'text14/semiBold',
  'text14/bold': 'text14/bold',
  'text16/normal': 'text16/normal',
  'text16/medium': 'text16/medium',
  'text16/semiBold': 'text16/semiBold',
  'text16/bold': 'text16/bold',
  'text18/normal': 'text18/normal',
  'text18/medium': 'text18/medium',
  'text18/semiBold': 'text18/semiBold',
  'text18/bold': 'text18/bold',
  'text20/normal': 'text20/normal',
  'text20/medium': 'text20/medium',
  'text20/semiBold': 'text20/semiBold',
  'text20/bold': 'text20/bold',
  'text24/normal': 'text24/normal',
  'text24/medium': 'text24/medium',
  'text24/semiBold': 'text24/semiBold',
  'text24/bold': 'text24/bold',
  'text30/normal': 'text30/normal',
  'text30/medium': 'text30/medium',
  'text30/semiBold': 'text30/semiBold',
  'text30/bold': 'text30/bold',
  'text36/normal': 'text36/normal',
  'text36/medium': 'text36/medium',
  'text36/semiBold': 'text36/semiBold',
  'text36/bold': 'text36/bold',
};
export type EBaseTextType = keyof typeof BaseTextTypes;
interface IBaseText extends TextProps {
  type: string | EBaseTextType;
  children?: ReactNode;
  styleText?: TextStyle;
}
export const BaseText = ({
  children,
  type,
  styleText,
  ...props
}: IBaseText) => {
  const { typography } = useTheme();
  const textStyle = useMemo(() => {
    return {
      fontSize: typography[typography[type].fontSize],
      fontWeight: typography[typography[type].fontWeight],
      fontFamily: typography[typography[type].fontFamily],
    };
  }, [type, typography]);

  return (
    <Text style={{ ...textStyle, ...styleText }} {...props}>
      {children}
    </Text>
  );
};
