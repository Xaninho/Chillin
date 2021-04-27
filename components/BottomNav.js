import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RadioScreen from '../screens/RadioScreen';
import LibraryScreen from '../screens/LibraryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Radio"
      activeColor="#ed6fb7"
      barStyle={{backgroundColor: '#353535'}}>
      <Tab.Screen
        name="Radio"
        component={RadioScreen}
        options={{
          tabBarLabel: 'Radio',
          tabBarIcon: ({color}) => (
            <Ionicons name="radio" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color}) => (
            <Ionicons name="library" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
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
