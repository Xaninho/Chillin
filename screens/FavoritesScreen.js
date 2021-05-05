import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useTheme, List} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import realm from '../database/allSchemas';
import {
  queryAllFavorites,
  insertFavorite,
  deleteFavorite,
} from '../database/allSchemas';

export default FavoritesScreen = () => {
  const {colors} = useTheme();
  const isFocused = useIsFocused();
  const [favoritesData, setFavoritesData] = useState(0);

  useEffect(() => {
    queryAllFavorites()
      .then(db => {
        setFavoritesData(db);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundDarker,
      }}>
      <FlatList
        style={styles.flatList}
        data={favoritesData}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.songName}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
  },
});
