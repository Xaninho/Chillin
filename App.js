import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabsScreen';

const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Music" component={MusicStackScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
