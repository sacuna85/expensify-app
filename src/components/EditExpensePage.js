import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props.expense);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    //Dispatch the action to edit expense
                    props.dispatch(editExpense(props.expense.id, expense));
                    //redirect to dashboard page
                    props.history.push('/');
                    console.log('updated', expense);
                }}>
            </ExpenseForm>
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div >
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);