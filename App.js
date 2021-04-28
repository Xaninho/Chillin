import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabsScreen';
import DrawerContent from './screens/DrawerContent';

import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
