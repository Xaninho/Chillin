import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import MusicScreen from './screens/MusicScreen';

const HomeStack = createStackNavigator();
const MusicStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
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

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Music" component={MusicStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
