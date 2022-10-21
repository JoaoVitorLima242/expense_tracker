import { createContext, useReducer } from "react";
import { Expense } from "../types";

const DUMMY_EXPENSES: Expense[] = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-04-22')
    },
    {
        id: 'e2',
        description: 'MacBook Pro M2',
        amount: 1999.99,
        date: new Date('2022-04-22')
    },
    {
        id: 'e3',
        description: 'The Shinning',
        amount: 79.99,
        date: new Date('2021-12-29')
    },
    {
        id: 'e4',
        description: 'Video Game',
        amount: 279.99,
        date: new Date('2021-03-19')
    },
    {
        id: 'e5',
        description: 'God of War',
        amount: 179.99,
        date: new Date('2021-01-09')
    },
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}: any) => {},
    deleteExpense: (id: string) => {},
    updateExpense: (id: string, {description, amount, date}: any) => {}
});

const expensesReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{ id, ...action.payload }, ...state]
        case 'UPDATE':
            const updatedExpenseIndex = state.findIndex(
                expense => expense.id === action.payload.id
            );

            const updatedExpense = state[updatedExpenseIndex]
            const updatedItem = {...updatedExpense, ...action.payload.data}
            const updatedExpenses = [...state]
            updatedExpenses[updatedExpenseIndex] = updatedItem

            return updatedExpenses
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload.id)
        default: 
            return state
    }
}

const ExpensesProvider = ({children}: any) => {
    const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expenseData: any) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const updateExpense = (id: string) => {
        dispatch({type: 'UPDATE', payload: id})
    }

    const deleteExpense = (id: string, expenseData: any) => {
        dispatch({type: 'DELETE', payload: {id, data: expenseData}})
    }

    const value = {
        expenses,
        addExpense,
        deleteExpense,
        updateExpense
    }

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesProvider