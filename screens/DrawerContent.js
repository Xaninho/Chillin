import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {color} from 'react-native-reanimated';

export default function DrawerContent(props) {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://www.alexandreneves.tech/static/media/xaninho.3dee35a5.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Alexandre Neves</Title>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="home" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="person" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {
                  props.navigation.navigate('ProfileScreen');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="settings" color={color} size={size} />
                )}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate('SettingsScreen');
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text style={styles.blackText}>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={darkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: 10,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#353535',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#353535',
  },
  blackText: {
    color: '#353535',
  },
});
