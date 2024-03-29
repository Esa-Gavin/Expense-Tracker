import React, { useState } from 'react';
import ExpenseMain from "./components/Expense/ExpenseMain";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },

  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },

  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },

  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];



const App = () => {

  // don't forget that expenses represents the current state (DUMMY_EXPENSES) //
  // while the setExpenses represents the function to update the state //

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseMain items={expenses} />
    </div>

  );
}

export default App;