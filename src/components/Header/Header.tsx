import React from 'react';
import headerLogo from 'assets/images/header-logo.png';

function Header() {
    return (
        <div className="header">
            <img src={headerLogo} alt="header-logo" />
        </div>
    )
}

export default Header
