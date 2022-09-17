import React from 'react';

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    // conditional statement //

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found here!</h2>
    }

    // conditional statement //

    return (
        <ul className='expenses-list'>
            {props.items.map(expense => <ExpenseItem key={expense.id} kichwa={expense.title} bei={expense.amount} tarehe={expense.date} />)}

        </ul>
    )
}

export default ExpenseList;