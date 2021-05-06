import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Button,
} from 'react-native';

import {
  insertFavorite,
  deleteFavorite,
  verifyFavorite,
} from '../database/allSchemas';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: 'red'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

function ControlButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [favorite, setFavorite] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  const [trackURL, setTrackURL] = useState('');

  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork, url} = track || {};

      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
      setTrackURL(url);
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText = 'Play';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  verifyFavorite(trackURL)
    .then(result => {
      setFavorite(result);
    })
    .catch(error => {
      alert(error);
    });

  const saveToFavorites = (songName, songArtist, songUrl, songArtUrl) => {
    const favoriteObject = {
      id: songUrl,
      songName: songName,
      songArtist: songArtist,
      songArtUrl: songArtUrl,
      favoritedAt: new Date(),
    };
    insertFavorite(favoriteObject)
      .then(setFavorite(true))
      .catch(error => {
        alert('Insert new favorite error ' + error);
      });
  };

  const deleteFromFavorites = songUrl => {
    deleteFavorite(songUrl)
      .then(setFavorite(false))
      .catch(error => {
        alert('Delete favorite error ' + error);
      });
  };

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{uri: trackArtwork}} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View>
      <Button
        title={favorite ? 'Favorited' : 'Add to'}
        onPress={() => {
          favorite
            ? deleteFromFavorites(trackURL)
            : saveToFavorites(trackTitle, trackArtist, trackURL, trackArtwork);
        }}
      />
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
