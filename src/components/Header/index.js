import React from 'react';

import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('Header');

const Header = () => {
    return <header className={b()}/>;
}

export default Header;
