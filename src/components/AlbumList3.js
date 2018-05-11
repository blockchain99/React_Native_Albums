import React, { Component } from 'react';
import { View, Text } from 'react-native';
//in albums dir, $npm install --save axios
import axios from 'axios';
//import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     // .then(response => console.log(response));
      .then(response => this.setState({ albums: response.data }));
  }
  renderAlbums() {
    return this.state.albums.map(album =>
        <Text key={album.title}>{album.title}</Text>
   );
  }

  render() {
    return (
      <View>
       {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
