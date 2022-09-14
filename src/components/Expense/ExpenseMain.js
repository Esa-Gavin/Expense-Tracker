import './ExpenseMain.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const ExpenseMain = (props) => {
    return (
        <div>
            <ExpensesFilter />
            <Card className='expenses'>
                <ExpenseItem kichwa={props.items[0].title} bei={props.items[0].amount} tarehe={props.items[0].date} />
                <ExpenseItem kichwa={props.items[1].title} bei={props.items[1].amount} tarehe={props.items[1].date} />
                <ExpenseItem kichwa={props.items[2].title} bei={props.items[2].amount} tarehe={props.items[2].date} />
                <ExpenseItem kichwa={props.items[3].title} bei={props.items[3].amount} tarehe={props.items[3].date} />
            </Card>

        </div>
        

    )
}

export default ExpenseMain;