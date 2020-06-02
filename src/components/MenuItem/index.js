import React from 'react';

import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('MenuItem');

const MenuItem = ({text}) => {
    return (
        <li className={b()}>
            <a className={b('link')}>{text}</a>
        </li>
    )
};

export default MenuItem;
