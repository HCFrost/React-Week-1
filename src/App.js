import React from 'react';
import './App.css'; 
import MyNavbar from './Components/Navbar.js'
import Content from './Components/Content.js'


export default class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <MyNavbar />
        <Content />
      </div>
    );
  } 
}

