import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/home';
import Roupas from './pages/roupas';
import Acessorios from './pages/acessorios';

const Stack = createStackNavigator();

const image = {uri: 'https://www.edigitalagency.com.au/wp-content/uploads/new-Gucci-logo-black-png-large-size.png'};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerStyle: { backgroundColor: '#f5efdb' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerBorderBottomColor: '#000000',
            headerRight: () => (
              <View style={styles.vw}>
                <Image 
                  source={image}
                  style={styles.logo}>
                </Image>
              </View>
            ),
          }}
            initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Roupas" component={Roupas} />
          <Stack.Screen name="Acessorios" component={Acessorios} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 15px black",
    width: 200,
    height: 100,
    borderRadius: 20,
  },
  logo: {
    width: 48,
    height: 32,
  },
  vw: {
    width: 90,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
