import React from 'react';

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    
    // conditional statement //
    let expensesContent = <p>No expenses found here!</p>

    if (filteredMwaka.length > 0) {
        expensesContent = filteredMwaka.map(expense => <ExpenseItem key={expense.id} kichwa={expense.title} bei={expense.amount} tarehe={expense.date} />)
    }
    // conditional statement //

    return (

    )
}

export default ExpenseList;