import { Header } from 'react-native-shared-components';
import { View, StyleSheet } from 'react-native';

// const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        title="AAA"
        isIcLeft={true}
        // renderIcLeft={() => {
        //   return <Text>dasdasd</Text>;
        // }}
        onPressIcLeft={() => {
          console.log('log 1234');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
