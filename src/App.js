import React from 'react';
import About from './Components/About';
import Book from './Components/Book';
import Contact from './Components/Contact';
import Works from './Components/Works';
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer'

const App = () =>(
  <div className='container'>
    <Header />
    <About />
    <Book />
    <Contact />
    <Works />
    <Footer />
  </div>
);

export default App;
