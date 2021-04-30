import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

export default FavoritesScreen = () => {
  const colors = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: colors.whiteSubtle}}>Music! Yay!</Text>
    </View>
  );
};
