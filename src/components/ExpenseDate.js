import './ExpenseDate.css';

function ExpenseDate(props) {
    const mwezi = props.tarehe.toLocaleString('en-US', { month: 'long' });
    const mwaka = props.tarehe.toLocaleString('en-US', { day: '2-digit' });
    const date = props.tarehe.getFullYear();

    return (
        <div>
            <div>{mwezi}</div>
            <div>{mwaka}</div>
            <div>{date}</div>
        </div>
    )
}

export default ExpenseDate;