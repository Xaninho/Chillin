import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import Player from '../components/Player';
import morning_coffee from '../music/morning_coffee.json';
import nocturnal_vibes from '../music/nocturnal_vibes.json';
import oriental_world from '../music/oriental_world.json';
import rainy_days from '../music/rainy_days.json';
import gentle_focus from '../music/gentle_focus.json';

export default MusicScreen = ({route}) => {
  const playbackState = usePlaybackState();

  const {playlist} = route.params;
  let playlistData;

  switch (playlist) {
    case 'morning_coffee':
      playlistData = morning_coffee;
      break;
    case 'nocturnal_vibes':
      playlistData = nocturnal_vibes;
      break;
    case 'oriental_world':
      playlistData = oriental_world;
      break;
    case 'rainy_days':
      playlistData = rainy_days;
      break;
    case 'gentle_focus':
      playlistData = gentle_focus;
      break;

    default:
      playlistData = morning_coffee;
  }

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        We'll be inserting a playlist into the library loaded from
        `playlist.json`. We'll also be using the `ProgressComponent` which
        allows us to track playback time.
      </Text>
      <Player
        onNext={skipToNext}
        style={styles.player}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
      />
      <Text style={styles.state}>{getStateName(playbackState)}</Text>
    </View>
  );
};

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
});
