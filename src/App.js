import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';


class App extends Component {
  
  constructor(){
    super();
    this.state={
      photos:[]
    };
  }

  componentDidMount(){
    fetch('api key')
      .then(response => response.json)
      .then(responseData => {
        this.setState({photos: responseData.data})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    console.log(this.state.photos)
    return (
      <div class="container">
        
        <Search/>
      
        <Nav/>

        <PhotoContainer data={this.state.photos}/>

      </div>
    );
  }
}

export default App;
