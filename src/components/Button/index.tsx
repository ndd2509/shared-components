import {
  Text,
  TouchableOpacity,
  type GestureResponderEvent,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
export interface IButton {
  title: string;
  buttonStyles?: ViewStyle;
  textBtnStyles?: TextStyle;
  isLoading?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  type?: 'primary' | 'secondary';
}
export const Button = ({ onPress, title, textBtnStyles }: IButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          // color: typography?.['Text_text-primary_(700)'] ?? 'white',
          // fontSize: typography?.text1_fontSize ?? 15,
          // fontWeight: typography?.text1_fontWeight ?? '600',
          // lineHeight: typography?.text1_lineHeight ?? 18,
          ...textBtnStyles,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
