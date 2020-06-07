import React from 'react';

import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('Skeleton');

const Skeleton = ({ count }) => {
    let generatedArray = new Array(count).fill('item');

    return (
        <div className={b()}>
            {generatedArray.map((item, i) =>
                <div key={i}>
                    <div className={b('title')}/>
                    <div className={b('item', { type: 'long' })}/>
                    <div className={b('item', { type: 'short' })}/>
                    <div className={b('item', { type: 'long' })}/>
                </div>)}
        </div>
    );
};

export default Skeleton;
