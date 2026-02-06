import {
  BaseButton,
  BaseContainer,
  BaseText,
} from 'react-native-shared-components';
import { StyleSheet, View } from 'react-native';

// const result = multiply(3, 7);

export default function App() {
  return (
    <BaseContainer style={styles.container} isHeader title="1234">
      <View style={styles.container}>
        <BaseText type="Bold" size={16}>
          1234
        </BaseText>
        <BaseButton type="common" label="Button" />
      </View>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
