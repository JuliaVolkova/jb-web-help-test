import React, { Fragment } from 'react';

import bemcl from 'bem-cl';
import arrowIcon from 'static/images/arrow.svg';
import './index.sass';

const b = bemcl('MenuItem');

const ITEM_LEVEL = {
    0: 'top',
    1: 'second',
    2: 'third',
    3: 'fourth',
    4: 'fifth',
    5: 'sixth'
};

function hasChildren(node) {
    return (typeof node === 'object')
        && (typeof node.pages !== 'undefined');
}

const renderTree = (item, allPages, callback, open, active, inputString = '', handleKeyDown) => {
    return <Fragment key={item.id}>
        <li tabIndex={item.level}
            onKeyDown={(e) => handleKeyDown(e, item.id)}
            className={b({
                level: ITEM_LEVEL[item.level],
                type: active === item.id
                    ? 'active' : 'normal'
            })} onClick={(e) => callback(e, item.id)}>
            <a className={b('link', {
                level: ITEM_LEVEL[item.level],
                type: active === item.id
                    ? 'active' : 'normal'
            })}>
                {item.pages && item.pages.length > 0
                && <img
                    src={arrowIcon}
                    width={8}
                    height={8}
                    alt={'arrow icon'}
                    className={b('link_icon', { state: open.includes(item.id) ? 'open' : 'closed' })}
                />}
                {item.title}
            </a>
        </li>
        {open.includes(item.id) &&
        <Fragment>
            {hasChildren(item)
                ? item.pages
                    .filter((page) => allPages[page].title.toLowerCase().includes(inputString))
                    .map((page) => renderTree(allPages[page], allPages, callback, open, active, inputString, handleKeyDown))
                : []}
        </Fragment>}
    </Fragment>;
};

const NewMenuItem = ({ item, allPages, onElementClick, open, active, inputString, handleKeyDown }) => {
    return renderTree(item, allPages, onElementClick, open, active, inputString, handleKeyDown);
};

export default NewMenuItem;
