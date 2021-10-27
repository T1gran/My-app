import React from 'react';
import navi from './NavBar.module.css';

const NavBar = () => {
    return <nav className = {navi.nav}>
        <div>
            <a className={navi.item} href={'/profile'}>
                Profile
            </a>
        </div>
        <div>
            <a className={navi.item} href = {'/dialogs'}>
                Dialogs
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
