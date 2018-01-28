/**
 * Created by austin on 27/01/2018.
 */
//imports a libary to help create a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//component

// Create a component
class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState(
            { albums: response.data })
        );
  }

  // helper method
  renderAlbums(){
    return this.state.albums.map(album =>
        <AlbumDetail key={album.title}  data={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
        <ScrollView >
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}

// export
export default  AlbumList;