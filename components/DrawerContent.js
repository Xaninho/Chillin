import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Title, Drawer, useTheme} from 'react-native-paper';

export default function DrawerContent(props) {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        style={{backgroundColor: colors.backgroundDarker}}>
        <View style={styles.drawerContent}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 7}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://steamuserimages-a.akamaihd.net/ugc/1657847141636978850/CF65B78BCE2460386121E6C90815174FCC3BFACC/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Naruto Uzumaki</Title>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({size}) => (
                  <Ionicons
                    name="musical-notes"
                    color={colors.whiteSubtle}
                    size={size}
                  />
                )}
                labelStyle={{color: colors.whiteSubtle}}
                label="Music"
                onPress={() => {
                  props.navigation.navigate('HomeDrawer');
                }}
              />
              <DrawerItem
                icon={({size}) => (
                  <Ionicons
                    name="person"
                    color={colors.whiteSubtle}
                    size={size}
                  />
                )}
                labelStyle={{color: colors.whiteSubtle}}
                label="Profile"
                onPress={() => {
                  props.navigation.navigate('ProfileScreen');
                }}
              />
              <DrawerItem
                icon={({size}) => (
                  <Ionicons name="cog" color={colors.whiteSubtle} size={size} />
                )}
                labelStyle={{color: colors.whiteSubtle}}
                label="Settings"
                onPress={() => {
                  props.navigation.navigate('SettingsScreen');
                }}
              />
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
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#cfcfcf',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 20,
  },
});
