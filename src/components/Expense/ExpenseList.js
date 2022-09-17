import React from 'react';

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    
    // conditional statement //
    let expensesContent = <p>No expenses found here!</p>
    // the name items is up to you, it can be named anything //
    if (props.items.length > 0) {
        expensesContent = props.items.map(expense => <ExpenseItem key={expense.id} kichwa={expense.title} bei={expense.amount} tarehe={expense.date} />)
    }
    // conditional statement //

    return (

    )
}

export default ExpenseList;