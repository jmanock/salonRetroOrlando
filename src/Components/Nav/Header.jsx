import React from 'react';
import Logo from '../../Images/salonRetroTrans.png';
import {Link, withRouter} from 'react-router-dom';

const Header = () =>(
  <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
    <Link to='/' className='navbar-brand'><img src={Logo} alt='logo' className='logo'></img></Link>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'><Link className='nav-link' to='/'>About</Link></li>
        <li className='nav-item'><Link className='nav-link'to='/Book'>Book</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Styles'>Styles</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/Location'>Location</Link></li>
      </ul>
      <span className='navbar-text'>
        <a className='icon' href='https://www.facebook.com/SalonRetroOrlando' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a>
        <a className='icon' href='mailto:salonretroorlando@gmail.com' target='_blank' rel='noopener noreferrer'><i className='fa fa-envelope'></i></a>
        <a className='icon' href='tel:3213563557'>321.356.3557</a>
      </span>
    </div>
  </nav>
);

export default withRouter(Header);
