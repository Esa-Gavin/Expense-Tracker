import './ExpenseMain.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const ExpenseMain = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem kichwa={props.items[0].title} bei={props.items[0].amount} tarehe={props.items[0].date} />
            <ExpenseItem kichwa={props.items[1].title} bei={props.items[1].amount} tarehe={props.items[1].date} />
            <ExpenseItem kichwa={props.items[2].title} bei={props.items[2].amount} tarehe={props.items[2].date} />
            <ExpenseItem kichwa={props.items[3].title} bei={props.items[3].amount} tarehe={props.items[3].date} />
        </Card>

    )
}

export default ExpenseMain;