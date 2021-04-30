import React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
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
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
