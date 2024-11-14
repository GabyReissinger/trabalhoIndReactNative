import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IndexHome from './src/screens/Home/indexHome';
import { IndexLogin } from './src/screens/Login/indexLogin';

export default function App() {
  return (
    //<IndexLogin />
    <IndexHome/>
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
