import React from 'react';
import {View, Button} from 'react-native';

export default LibraryScreen = navigation => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525',
      }}>
      <Button
        title="Go to Music"
        onPress={() => navigation.navigate('Music')}
      />
    </View>
  );
};
