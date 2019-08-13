import React, { Component} from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config.js';
import Error from './components/Error'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {
  constructor(){
    super();
    this.state = {
      photos:[], 
      loading: true
    };
  }
 
  //setting the default photos to photos of banff.
    componentDidMount(){
      this.performSearch("banff");
    }

   
    //This is performing search.
    performSearch = (query) => {
      this.setState({
        loading: true, //Showing "loading..." before search results are shown.
        
      });

      //Getting the data from flickr. If it can't get data, it catches the error.
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response=>{
        console.log(response);
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
        .catch(error => {
          console.log('error fetching and parsing data', error);
        });
    }

    
  render(){
    //console.log(this.state.photos)
    
    return (


      <BrowserRouter>
        <div className="container">

          {/* Passing in performSearch to the Search and Nav Component */}
          <Search onSearch={this.performSearch}/>
          <Nav onClick={this.performSearch}/>

          {/* When the site is loading, show "Loading...", if not, then show the photos by passing in the data to the PhotoContainer Component.  */}
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            :
          <Switch>            
            <Route exact path="/" render={props => <PhotoContainer data={this.state.photos}{...props} />} />
            <Route exact path="/performSearch/:name" render={props => <PhotoContainer search={this.performSearch} data={this.state.photos} {...props}/>} />
            <Route component={Error} />
          </Switch>
          }
        </div>
      </BrowserRouter>
        
    );
  }
}

export default App;
