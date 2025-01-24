import { StyleSheet, View, Text } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Tela de Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#baddff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});