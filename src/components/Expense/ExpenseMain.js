import React, { useState } from 'react';

import './ExpenseMain.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


const ExpenseMain = (props) => {

    // setFilteredYear is our function to be able to update the state, //
    // to 2020 //
    // the parameter enteredSelectData is custom and can be named anything //
    // filteredYear represents the current state while setFilteredYear, //
    // represents a function to update the current state //

    const [filteredYear, setFilteredYear] = useState('2020');

    const saveSelectChangeHandler = (enteredSelectData) => {
        setFilteredYear(enteredSelectData);
    }

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear}  onSaveSelectChangeHandler={saveSelectChangeHandler} />
                <ExpenseItem kichwa={props.items[0].title} bei={props.items[0].amount} tarehe={props.items[0].date} />
                <ExpenseItem kichwa={props.items[1].title} bei={props.items[1].amount} tarehe={props.items[1].date} />
                <ExpenseItem kichwa={props.items[2].title} bei={props.items[2].amount} tarehe={props.items[2].date} />
                <ExpenseItem kichwa={props.items[3].title} bei={props.items[3].amount} tarehe={props.items[3].date} />
            </Card>

        </div>


    )
}

export default ExpenseMain;