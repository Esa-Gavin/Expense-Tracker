import ExpenseItem from "./components/ExpenseItem";
import ExpenseDate from "./components/ExpenseDate";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14),
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
  return (
    <div>
      <h2>My Expense Tracker!</h2>
      <ExpenseItem kichwa={expenses[0].title} bei={expenses[0].amount} tarehe={expenses[0].date} />
      <ExpenseItem kichwa={expenses[1].title} bei={expenses[1].amount} tarehe={expenses[1].date} />
      <ExpenseItem kichwa={expenses[2].title} bei={expenses[2].amount} tarehe={expenses[2].date} />
      <ExpenseItem kichwa={expenses[3].title} bei={expenses[3].amount} tarehe={expenses[3].date} />
    </div>
  );
}

export default App;