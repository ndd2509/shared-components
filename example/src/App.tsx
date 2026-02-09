import {
  BaseButton,
  BaseContainer,
  BaseText,
} from 'react-native-shared-components';
import { StyleSheet } from 'react-native';

// const result = multiply(3, 7);

export default function App() {
  return (
    <BaseContainer style={styles.container} isHeader title="1234">
      <BaseText type="text14/normal">1234</BaseText>
      <BaseButton type="common" size="small" label="Button" />
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
