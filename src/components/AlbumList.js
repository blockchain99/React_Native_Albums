import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//in albums dir, $npm install --save axios
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
//identify the content to scroll -> AlbumList not AlbumDetail
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
//To scroll , change <View> tag with <ScrollView> &
//style of flex: 1 to the root element View (index.js).
//not to bound back.(expand component to fill the entire
//contents of device )
  render() {
    return (
      <ScrollView>
       {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
