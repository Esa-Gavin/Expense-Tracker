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
                <ExpensesFilter selected={filteredYear} onSaveSelectChangeHandler={saveSelectChangeHandler} />
                {props.items.map(expense => <ExpenseItem kichwa={expense.title} bei={expense.amount} tarehe={expense.date} />)}

            </Card>

        </div>


    )
}

export default ExpenseMain;