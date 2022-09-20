import React from 'react';

import './ChatBar.css';

const ChatBar = (props) => {

    let barFillHeight = '0%';

    //math.round is for rounding to the next integer //
    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>

    )
    
}

export default ChatBar;