import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // at the select tag where we have value as one of the properties, //
    // we are able to change the state to '2020' as put in the parent, //
    // component by using props.selected //

    const selectChangeHandler = (event) => {
        props.onSaveSelectChangeHandler(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectChangeHandler}> 
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;