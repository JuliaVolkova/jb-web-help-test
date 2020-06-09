import React from 'react';

import bemcl from 'bem-cl';
import search from 'static/images/search.svg';
import close from 'static/images/close.svg';
import './index.sass';

const b = bemcl('InputSearch');

const InputSearch = ({ value, onChange, placeholder, onClear }) => {
    return <div className={b()}>
        {!value && <img src={search} width={20} height={20} className={b('icon')} alt={'search icon'}/>}
        {value && <button className={b('close_button')} onClick={onClear}>
            <img src={close} width={20} height={20} className={b('icon_close')} alt={'close icon'}/>
        </button>}
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={b('input')}/>
    </div>;
};

export default InputSearch;
;
