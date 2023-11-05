import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/stack.routes';
// Routes
import Login from './src/pages/Login';


export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
