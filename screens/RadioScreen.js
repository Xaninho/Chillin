import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {View, Button, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useTheme} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import { changeTrackPlayerState } from '../redux/trackPlayer';

const RadioScreen = () => {
  const {colors} = useTheme();
  const isFocused = useIsFocused();

  const trackState = useSelector(state => state.trackState.value);
  const dispatch = useDispatch;

 /* useEffect(() => {
    if (isFocused == true) {
      setupRadio();
    }
  }, [isFocused]);
*/

  const playButton = () => {
    if (trackState == 'Music') {
      TrackPlayer.stop();
      TrackPlayer.reset();
      setupRadio();
    } else {
      setupRadio();
    }  
  }

  async function setupRadio() {
    dispatch(changeTrackPlayerState('Radio'));
    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.add({
        id: 'radio',
        url: 'http://216.21.64.84:8000/WMXR-LP',
        title: 'Radio Streaming',
        artist: "Chillin Radio'",
        artwork:
          'https://i.pinimg.com/originals/ee/c9/cf/eec9cf46d05f356bc4bacea5ac2344e9.jpg',
      });
    });
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [RadioPlayer.CAPABILITY_PLAY, RadioPlayer.CAPABILITY_STOP],
      compactCapabilities: [
        RadioPlayer.CAPABILITY_PLAY,
        RadioPlayer.CAPABILITY_STOP,
      ],
    });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundDarker,
      }}>
      <Button title="Play" onPress={() => playButton()} />
      <Text>{trackState ? 'Playing' : 'Not Playing'}</Text>
    </View>
  );
};

const getStateName = (state) => {
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

export default connect()(RadioScreen)