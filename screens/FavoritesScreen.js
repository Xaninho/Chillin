import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ToastAndroid} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Clipboard from '@react-native-community/clipboard';

import {queryAllFavorites, deleteFavorite} from '../database/allSchemas';

export default FavoritesScreen = () => {
  const {colors} = useTheme();
  const isFocused = useIsFocused();
  const [favoritesData, setFavoritesData] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    queryAllFavorites()
      .then(db => {
        setFavoritesData(db);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isFocused, refresh]);

  const copyToClipboard = (musicName, musicArtist) => {
    Clipboard.setString(musicName + ' - ' + musicArtist);
    ToastAndroid.show(
      musicName + ' - ' + musicArtist + ' Copied to Clipboard!',
      ToastAndroid.SHORT,
    );
  };

  const deleteFromFavorite = idToDelete => {
    deleteFavorite(idToDelete)
      .then(
        setRefresh(!refresh),
        ToastAndroid.show('Music Deleted from Favorites', ToastAndroid.SHORT),
      )
      .catch(error => {
        alert('Delete favorite error ' + error);
      });
  };

  return (
    <MenuProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.backgroundDarker,
        }}>
        <FlatList
          style={styles.flatList}
          data={favoritesData}
          extraData={refresh}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Menu>
              <MenuTrigger text={item.songName} style={styles.item} />
              <MenuOptions>
                <MenuOption
                  onSelect={() =>
                    copyToClipboard(item.songName, item.songArtist)
                  }
                  text="Copy to Clipboard"
                />
                <MenuOption
                  onSelect={() => deleteFromFavorite(item.id)}
                  text="Delete"
                />
              </MenuOptions>
            </Menu>
          )}
        />
      </View>
    </MenuProvider>
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
