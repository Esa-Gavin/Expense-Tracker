import './ExpenseDate.css';

function ExpenseDate(props) {
    const mwezi = props.tarehe.toLocaleString('en-US', { month: 'long' });
    const mwaka = props.tarehe.toLocaleString('en-US', { day: '2-digit' });
    const date = props.tarehe.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{mwezi}</div>
            <div className='expense-date__year'>{mwaka}</div>
            <div className='expense-date__day'>{date}</div>
        </div>
    )
}

export default ExpenseDate;