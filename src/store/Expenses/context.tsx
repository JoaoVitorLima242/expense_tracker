import { createContext, useReducer } from "react";

// Types
import { Expense } from "../../types";
import { Action, ContextValue, ExpenseData, ProviderProps, State } from "./type";

const DUMMY_EXPENSES: Expense[] = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-10-20')
    },
    {
        id: 'e2',
        description: 'MacBook Pro M2',
        amount: 1999.99,
        date: new Date('2022-10-18')
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

export const ExpensesContext = createContext({} as ContextValue);

const expensesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD':
            const newId = new Date().toString() + Math.random().toString()
            const expenseData = action.payload.data as Expense
            const newExpense = { ...expenseData, id: newId }
            return [newExpense, ...state]
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

const ExpensesProvider = ({children}: ProviderProps) => {
    const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

    const addExpense = (expenseData: ExpenseData) => {
        dispatch({type: 'ADD', payload: { data: expenseData }})
    }

    const updateExpense = (id: string, expenseData: ExpenseData) => {
        dispatch({type: 'UPDATE', payload: { id, data: expenseData }})
    }

    const deleteExpense = (id: string) => {
        dispatch({type: 'DELETE', payload: {id}})
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