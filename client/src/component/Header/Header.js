import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    MEC
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link
                            to='/'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/create'>
                            Create Product
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header 