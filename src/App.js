import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config.js';


class App extends Component {
  state={
    photos:[]
  };
  // constructor(){
  //   super();
  //   this.state={
  //     photos:[]
  //   };
  // }

  // componentDidMount(){
  //   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1`)
  //     .then(response => response.json)
  //     .then(responseData => {
  //       this.setState({photos: responseData.data})
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

    componentDidMount(){
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
      .then(response=>{
        console.log(response);
        this.setState({
          photos: response.data.photos.photo
        });
      })
        .catch(error => {
          console.log('error fetching and parsing data', error);
        });
    }




  render(){
    console.log(this.state.photos)
    return (
      <div className="container">
        
        <Search/>
      
        <Nav/>

        <PhotoContainer photos={this.state.photos}/>

      </div>
    );
  }
}

export default App;
