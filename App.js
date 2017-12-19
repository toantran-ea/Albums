import React from 'react';
import { Text, View } from 'react-native';

import Header from './src/Header';
import AlbumList from './src/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Albums" />
        <Text>Changes you make will automatically reload.</Text>
        <AlbumList />
      </View>
    );
  }
}
