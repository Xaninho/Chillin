import React from 'react';
import {View, Button} from 'react-native';
import {useTheme} from 'react-native-paper';

export default LibraryScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundDarker,
      }}>
      <Button
        title="Go to Music"
        onPress={() => {
          navigation.navigate('Music');
        }}
      />
    </View>
  );
};
