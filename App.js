import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './src/screens/home';
import Profile from './src/screens/profile';

export default function App() {
  return (
    // <Home />
    <Profile />
    // <View style={styles.container}>
    //   <Text>Criando meu primeiro app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
