import {
  StyleSheet,
  TouchableOpacity,
  type GestureResponderEvent,
  type TextStyle,
} from 'react-native';
export interface IButton {
  children?: any;
  buttonStyles?: TextStyle;
  isLoading?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  type?: 'primary' | 'secondary';
}

export const Button = ({ onPress, children }: IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
