import React from 'react';
import navi from './NavBar.module.css';

const NavBar = () => {
    return <nav className = {navi.nav}>
        <div>
            <a className={navi.item} href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                Abobus
            </a>
        </div>
        <div>
            <a className={navi.item} href = {'2'}>
                Among us
            </a>
        </div>
        <div>
            <a className={navi.item} href={'3'}>
                Gladiator
            </a>
        </div>
    </nav>
};

export default NavBar();
