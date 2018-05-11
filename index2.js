import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header
      headerText={'Album from parent'}
      headerText2={'Album 2'}
      headerText3={'Album 3'}
    />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
