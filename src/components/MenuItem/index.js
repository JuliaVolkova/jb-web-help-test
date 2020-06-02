import React from 'react';
import {getItemSubElement} from "ducks/tableOfContent";
import {connect} from "react-redux";

import bemcl from 'bem-cl';
import arrowIcon from 'static/images/arrow.svg';
import './index.sass';

const b = bemcl('MenuItem');

const MenuItem = ({
                      text = '',
                      level,
                      pages = [],
                      allPages,
                      onElementClick,
                      open,
                      pageId = '',
                      link = '',
                      itemSubElement = {},
                  }) => {
    return (
        <li className={b({level})} onClick={() => onElementClick(pageId)}>
            <img
                src={arrowIcon}
                width={8}
                height={8}
                alt={'arrow icon'}
                className={b('link_icon')}/>
            <a className={b('link')}>
                {text}
            </a>
            {open.includes(pageId) && <ul className={b('subelements_list')}>
                {pages
                    ? pages.map((page) =>
                        <li className={b({level: 'second'})} key={page}>
                            <a className={b('link', {level: 'second'})}>
                                {allPages[page].title}
                            </a>
                        </li>)
                    : []
                }
            </ul>}
        </li>
    )
};

const mapStateToProps = (state, props = {}) => ({
    itemSubElement: getItemSubElement(state, props)
});

export default connect(mapStateToProps, null)(MenuItem);
