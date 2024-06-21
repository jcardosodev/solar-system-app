import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../Pages/HomePage';
import MarsTrip from '../Pages/MarsTrip/MarsTrip';
import { Login } from '../Pages/Login/Login';
import SolarSystemScreen from '../Pages/SolarSystem';
import TelaInicial from '../Pages/TelaInicial';
import { RootStackParamList, RootTabParamList } from './types';
import { TabBarVisibilityProvider, useTabBarVisibility } from '../context/TabBarVisibilityContext';
import MenuBar from '../components/MenuBar/MenuBar';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

// Função para renderizar o MenuBar
const renderMenuButton = (navigation: any) => (
  <MenuBar onPress={() => navigation.openDrawer()} />
);

// Definindo o Stack Navigator para a tela Home com um botão para abrir o Drawer
const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="TelaInicial"
    screenOptions={({ navigation }) => ({
      headerTransparent: true,
      headerLeft: () => renderMenuButton(navigation),
      headerTitle: '', // Removendo o título da tela
    })}
  >
    <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);

const MarsTripStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerTransparent: true,
      headerLeft: () => renderMenuButton(navigation),
      headerTitle: '', // Removendo o título da tela
    })}
  >
    <Stack.Screen name="MarsTrip" component={MarsTrip} />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerTransparent: true,
      headerLeft: () => renderMenuButton(navigation),
      headerTitle: '', // Removendo o título da tela
    })}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const SolarSystemStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerTransparent: true,
      headerLeft: () => renderMenuButton(navigation),
      headerTitle: '', // Removendo o título da tela
    })}
  >
    <Stack.Screen name="SolarSystem" component={SolarSystemScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  const { isTabBarVisible } = useTabBarVisibility();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string | undefined;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MarsTrip') {
            iconName = 'rocket';
          } else if (route.name === 'Login') {
            iconName = 'log-in';
          } else if (route.name === 'SolarSystem') {
            iconName = 'planet';
          }

          return <Ionicons name={iconName ?? ''} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: isTabBarVisible ? {} : { display: 'none' },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="MarsTrip" component={MarsTripStack} options={{ headerShown: false }} />
      <Tab.Screen name="Login" component={LoginStack} options={{ headerShown: false }} />
      <Tab.Screen name="SolarSystem" component={SolarSystemStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// Definindo o Drawer Navigator
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        headerTransparent: true,
        drawerContentStyle: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="MarsTrip" component={MarsTripStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Login" component={LoginStack} options={{ headerShown: false }} />
      <Drawer.Screen name="SolarSystem" component={SolarSystemStack} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const App = () => (
  <TabBarVisibilityProvider>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  </TabBarVisibilityProvider>
);

export default App;
