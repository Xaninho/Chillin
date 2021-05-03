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
        title="Morning Coffee"
        onPress={() => {
          navigation.navigate('Music', {
            playlist: 'morning_coffee',
          });
        }}
      />
      <Button
        title="Nocturnal Vibes"
        onPress={() => {
          navigation.navigate('Music', {
            playlist: 'nocturnal_vibes',
          });
        }}
      />
      <Button
        title="Oriental World"
        onPress={() => {
          navigation.navigate('Music', {
            playlist: 'oriental_world',
          });
        }}
      />
      <Button
        title="Rainy Days"
        onPress={() => {
          navigation.navigate('Music', {
            playlist: 'rainy_days',
          });
        }}
      />
      <Button
        title="Gentle Focus"
        onPress={() => {
          navigation.navigate('Music', {
            playlist: 'gentle_focus',
          });
        }}
      />
    </View>
  );
};
