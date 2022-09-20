import React, { useState } from 'react';

import './ExpenseMain.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


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
    // here 'items' represents expenses which is found in app.js //
    const filteredMwaka = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return (
        <div>

            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onSaveSelectChangeHandler={saveSelectChangeHandler} />
                <ExpensesChart />
                <ExpenseList items={filteredMwaka} />
            </Card>

        </div>


    )
}

export default ExpenseMain;