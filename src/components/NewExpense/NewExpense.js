import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false); // this is done so that the form should not show once you save an expense //
    }
    // function to show the form //
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    // function to show the form //

    // function to cancel the form //
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    // (!)isEditing means that the button will show if isEditing will be true //
    // because initially isEditing is set to false by useState //
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditingHandler={stopEditingHandler}/>}
            
        </div>
    )
}

export default NewExpense;