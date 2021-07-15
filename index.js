import React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import TrackPlayer from 'react-native-track-player';
import store from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';

import {name as appName} from './app.json';
import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#ed6fb7',
    accent: '#14a3c7',
    backgroundDarker: '#252525',
    backgroundLighter: '#353535',
    whiteSubtle: '#cfcfcf',
  },
};

export default Main = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
TrackPlayer.registerPlaybackService(() => require('./service.js'));
