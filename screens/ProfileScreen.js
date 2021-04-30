import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

export default ProfileScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundDarker,
      }}>
      <Text style={{color: colors.whiteSubtle}}>Profile Screen</Text>
    </View>
  );
};
