import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }

        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const enableEditingHandler = () => {
        setIsEditing(true);
    }

    const disableEditingHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={enableEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={disableEditingHandler} onSaveExpenseData = {saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;