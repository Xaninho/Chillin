import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MusicScreen from '../screens/MusicScreen';
import RadioScreen from '../screens/RadioScreen';
import LibraryScreen from '../screens/LibraryScreen';
import FavoritestScreen from '../screens/FavoritesScreen';

const HomeStack = createStackNavigator();
const MusicStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Ionicons name="radio" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Music"
      component={MusicStackScreen}
      options={{
        tabBarLabel: 'Music',
        tabBarColor: '#994efad',
        tabBarIcon: ({color}) => (
          <Ionicons name="music" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        tabBarLabel: 'Library',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <Ionicons name="library" color={color} size={23} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={RadioScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={'#35355'}
              size={23}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const MusicStackScreen = ({navigation}) => {
  return (
    <MusicStack.Navigator>
      <MusicStack.Screen
        name="Music"
        component={MusicScreen}
        options={{
          title: 'Music',
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={'#35355'}
              size={23}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </MusicStack.Navigator>
  );
};
