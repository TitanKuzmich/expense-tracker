import React, { useReducer, createContext }  from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [0]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    const addTransaction = (transactions) => dispatch({ type: 'ADD_TRANSACTION', payload: transactions })

    const balance = transactions.reduce((acc, curr) => curr.type === 'Expense' ? acc - curr.amount : acc + curr.amount, 0)

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}