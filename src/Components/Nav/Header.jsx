import React from 'react';

const Header = () =>(
  <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
    <span className='navbar-brand'>SalonRetroOrlando</span>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><a href='#about' className='nav-link'>About</a></li>
        <li className='nav-item'><a href='#book' className='nav-link'>Book</a></li>
        <li className='nav-item'><a href='#style' className='nav-link'>Style</a></li>
        <li className='nav-item'><a href='#location' className='nav-link'>Location</a></li>
      </ul>
      <span className='navbar-text'>
        <p>181 O'Brien Rd <br/>
        Fern Park, FL <br />
      321.356.3557</p> 
      </span>
    </div>
  </nav>
);

export default Header;
