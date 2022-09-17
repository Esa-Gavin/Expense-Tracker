import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => { // the word props can be set to any other name //

    const [title, setTitle] = useState(props.kichwa);

    const clickHandler = () => { // it is a common convention to name event handlers 'Handlers' //
        setTitle('Kiroshi')
        console.log("Updated!!!")
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate tarehe={props.tarehe} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.bei}</div>
            </div>
            <button onClick={clickHandler}>Change Title!!</button>
        </Card>
    );
}

export default ExpenseItem;