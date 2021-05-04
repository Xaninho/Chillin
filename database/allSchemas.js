import Realm from 'realm';
export const FAVORITES_SCHEMA = 'Favorites';

export const FavoritesSchema = {
  name: FAVORITES_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true},
    songName: 'string',
    songArtist: 'string',
    songArtUrl: 'string',
    favoritedAt: 'date',
  },
};

const databaseOptions = {
  path: 'favorites.realm',
  schema: [FavoritesSchema],
  schemaVersion: 0,
};

// Functions for Favorites

export const insertFavorite = newFavorite =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(FAVORITES_SCHEMA, newFavorite);
          resolve(newFavorite);
        });
      })
      .catch(error => reject(error));
  });

export const deleteFavorite = favoriteId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingFavorite = realm.objectForPrimaryKey(
            FavoritesSchema,
            favoriteId,
          );
          realm.delete(deletingFavorite);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const queryAllFavorites = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let allFavorites = realm.objects(FAVORITES_SCHEMA);
        resolve(allFavorites);
      })
      .catch(error => reject(error));
  });

export default new Realm(databaseOptions);
