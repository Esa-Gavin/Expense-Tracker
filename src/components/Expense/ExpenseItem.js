import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) { // the word props can be set to any other name //
    let title = props.kichwa;
    const [kichwa, setKichwa] = useState(props.kichwa);
    
    const clickHandler = () => {
        title = "Updated!";
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate tarehe={props.tarehe} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.bei}</div>
            </div>
            <buttton onClick={clickHandler}>Change Title!!</buttton>
        </Card>
    );
}

export default ExpenseItem;