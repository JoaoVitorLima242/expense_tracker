import { createContext, useReducer } from "react";

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
        case 'DELETE':
        default: 
            return state
    }
}

const ExpensesProvider = ({children}: any) => {
    const [expensesState, dispatch] = useReducer(expensesReducer)

    const addExpense = (expenseData: any) => {
        dispatch({type: 'ADD', payload: expenseData})
    }

    const updateExpense = (id: string) => {
        dispatch({type: 'UPDATE', payload: id})
    }

    const deleteExpense = (id: string, expenseData: any) => {
        dispatch({type: 'DELETE', payload: {id, data: expenseData}})
    }


    return (
        <ExpensesContext.Provider>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesProvider