import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

import realm from '../database/allSchemas';
import {
  queryAllFavorites,
  insertFavorite,
  deleteFavorite,
} from '../database/allSchemas';

export default FavoritesScreen = () => {
  const {colors} = useTheme();

  const favoritesData = queryAllFavorites();
  console.log(favoritesData);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundDarker,
      }}>
      <FlatList
        style={styles.flatList}
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
