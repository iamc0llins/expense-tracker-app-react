import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [titleInputed, setTitleInputed] = useState('');
    const [amountInputed, setAmountInputed] = useState('');
    const [dateInputed, setDateInputed] = useState('');

    // const [userInput, setUserInput] = useState({
    //     titleInputed : '',
    //     amountInputed : '',
    //     dateInputed : ''
    // })

    const changeHandlerTitle = (event)=> {
        console.log("Title Changed!!!!")
        setTitleInputed(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     titleInputed : event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, titleInputed : event.target.value};
        // });
        console.log(event.target.value)
    };

    const changeHandlerAmount = (event) => {
        console.log("Amount Changed!!!!")
        setAmountInputed(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amountInputed : event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, amountInputed : event.target.value};
        // });
        console.log(event.target.value)
    };

    const changeHandlerDate = (event) => {
        console.log("Date Changed!!!!")
        setDateInputed(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     dateInputed : event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, dateInputed : event.target.value};
        // });
        console.log(event.target.value)
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : titleInputed,
            amount : +amountInputed,
            date : new Date(dateInputed)
        }

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setAmountInputed('');
        setDateInputed('');
        setTitleInputed('');
    }



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tile</label>
                    <input type='text' onChange={changeHandlerTitle} value={titleInputed}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={changeHandlerAmount} value={amountInputed}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={changeHandlerDate} value={dateInputed}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;