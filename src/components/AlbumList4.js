import React, { Component } from 'react';
import { View } from 'react-native';
//in albums dir, $npm install --save axios
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
//pass down to child(AlbumDetail) as a name, album-> child us it
//as props.album
    return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
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
