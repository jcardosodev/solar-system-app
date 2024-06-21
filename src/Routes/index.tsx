import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
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

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="TelaInicial">
    <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
    <Stack.Screen name="MarsTrip" component={MarsTrip} options={{ headerShown: false }} />
    <Stack.Screen name="TripSummary" component={TripSummary} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const useShouldHideTabBar = (route: RouteProp<RootTabParamList, keyof RootTabParamList>): boolean => {
  const routeName = route.key;
  return route.name === 'Home' && routeName === 'TelaInicial';
};

const Routes = () => {
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
          tabBarStyle: useShouldHideTabBar(route) ? { display: 'none' } : {},
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="MarsTrip" component={MarsTrip} />
        <Tab.Screen name="TripSummary" component={TripSummary} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastrar} />
        <Tab.Screen name="SolarSystem" component={SolarSystemScreen} />
        <Tab.Screen name="ImageOfTheDay" component={ImageOfTheDay} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
