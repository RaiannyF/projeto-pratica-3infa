import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cat from './src/assets/gato.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Projetinho lindo do trio perfeito Gabirel Maria Raianny </Text>
      <StatusBar style="auto" />
      <Image style={styles.image} 
        source={cat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 300,
  }

});
