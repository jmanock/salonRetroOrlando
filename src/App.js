import React from 'react';
import About from './Components/About';
import Book from './Components/Book';
import Styles from './Components/Styles';
import Location from './Components/Location';
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer'
import './App.css';

const App = () =>(
  <div>
    <Header />
    <About />
    <Book />
    <Styles />
    <Location />
    <Footer />
  </div>
)
export default App;
