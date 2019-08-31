import React,{Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import About from './Components/About';
import Book from './Components/Book';
import Styles from './Components/Styles';
import Location from './Components/Location';
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer'
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/Book' component={Book} />
          <Route path='/Styles' component={Styles} />
          <Route path='/Location' component={Location} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
