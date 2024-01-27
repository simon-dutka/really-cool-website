import React from 'react';
import './header.scss';
import Typewriter from 'typewriter-effect';

const Header = () => (
    <section className='header'>
        <h1 className='header__heading'>
            Let's see some
            <Typewriter
                options={{
                    strings: ['cool staff', 'space staff', 'awesome staff'],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: true,
                }}
            />
        </h1>
    </section>
);

export default Header;
