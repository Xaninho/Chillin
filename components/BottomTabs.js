import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';

import MusicScreen from '../screens/MusicScreen';
import RadioScreen from '../screens/RadioScreen';
import LibraryScreen from '../screens/LibraryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const RadioStack = createStackNavigator();
const MusicStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default BottomTabs = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Radio"
      activeColor={colors.primary}
      barStyle={{backgroundColor: colors.backgroundLighter}}>
      <Tab.Screen
        name="Radio"
        component={RadioStackScreen}
        options={{
          tabBarLabel: 'Radio',
          tabBarIcon: ({color}) => (
            <Ionicons name="radio" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={MusicStackScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color}) => (
            <Ionicons name="library" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <Ionicons name="heart" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RadioStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <RadioStack.Navigator>
      <RadioStack.Screen
        name="Radio"
        component={RadioScreen}
        options={{
          title: 'Radio',
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.backgroundLighter,
          },
          headerLeftContainerStyle: {
            left: 20,
          },
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={colors.whiteSubtle}
              size={23}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </RadioStack.Navigator>
  );
};

const MusicStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <MusicStack.Navigator initialRouteName="Library">
      <MusicStack.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Library',
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.backgroundLighter,
          },
          headerLeftContainerStyle: {
            left: 20,
          },
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={colors.whiteSubtle}
              size={23}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
      <MusicStack.Screen
        name="Music"
        component={MusicScreen}
        options={{
          title: 'Music',
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.backgroundLighter,
          },
          headerLeftContainerStyle: {
            left: 20,
          },
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={colors.whiteSubtle}
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

const FavoritesStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          headerTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.backgroundLighter,
          },
          headerLeftContainerStyle: {
            left: 20,
          },
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={colors.whiteSubtle}
              size={23}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </FavoritesStack.Navigator>
  );
};
