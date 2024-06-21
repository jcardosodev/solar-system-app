import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../Pages/HomePage';
import MarsTrip from '../Pages/MarsTrip/MarsTrip';
import TripSummary from '../components/TripSummary/TripSummary';
import { Login } from '../Pages/Login/Login';
import { Cadastrar } from '../Pages/Cadastro/Cadastro';
import SolarSystemScreen from '../Pages/SolarSystem';
import ImageOfTheDay from '../Pages/ImageOfTheDay/ImageOfTheDay';
import TelaInicial from '../Pages/TelaInicial';
import { RootStackParamList, RootTabParamList } from './types';
import { TabBarVisibilityProvider, useTabBarVisibility } from '../context/TabBarVisibilityContext'

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="TelaInicial">
    <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const Routes = () => {
  const { isTabBarVisible } = useTabBarVisibility();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string | undefined;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'MarsTrip') {
              iconName = 'rocket';
            } else if (route.name === 'TripSummary') {
              iconName = 'list';
            } else if (route.name === 'Login') {
              iconName = 'log-in';
            } else if (route.name === 'Cadastro') {
              iconName = 'person-add';
            } else if (route.name === 'SolarSystem') {
              iconName = 'planet';
            } else if (route.name === 'ImageOfTheDay') {
              iconName = 'image';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: isTabBarVisible ? {} : { display: 'none' },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="MarsTrip" component={MarsTrip} options={{ headerShown: false }} />
        <Tab.Screen name="TripSummary" component={TripSummary} options={{ headerShown: false }} />
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Cadastro" component={Cadastrar} options={{ headerShown: false }} />
        <Tab.Screen name="SolarSystem" component={SolarSystemScreen} options={{ headerShown: false }} />
        <Tab.Screen name="ImageOfTheDay" component={ImageOfTheDay} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <TabBarVisibilityProvider>
    <Routes />
  </TabBarVisibilityProvider>
);

export default App;
