import React from 'react'

const  Header = () => {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    MEC
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='/#'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Zagluszka
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header 