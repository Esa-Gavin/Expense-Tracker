import './ExpenseItem.css';

function ExpenseItem(props) { // the word props can be set to any other name //
    

    return (
        <div className='expense-item'>
            <div>
                <div>{mwezi}</div>
                <div>{mwaka}</div>
                <div>{date}</div>
            </div>

            <div className='expense-item__description'>
                <h2>{props.kichwa}</h2>
                <div className='expense-item__price'>${props.bei}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;