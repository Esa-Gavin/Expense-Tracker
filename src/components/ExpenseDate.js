

function ExpenseDate() {
    const mwezi = props.tarehe.toLocaleString('en-US', { month: 'long' });
    const mwaka = props.tarehe.toLocaleString('en-US', { day: '2-digit' });
    const date = props.tarehe.getFullYear();

}

export default ExpenseDate;