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
    // keys are used to give an identity to the elements in a list //

    const [filteredYear, setFilteredYear] = useState('2022');

    const saveSelectChangeHandler = (enteredSelectData) => {
        setFilteredYear(enteredSelectData);
    }

    const filteredMwaka = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSaveSelectChangeHandler={saveSelectChangeHandler} />
                {expensesContent}
            </Card>

        </div>


    )
}

export default ExpenseMain;