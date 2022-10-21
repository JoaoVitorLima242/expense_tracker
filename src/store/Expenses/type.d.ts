import { Expense } from "../../types";

type Payload = {
    id?: string;
    data?: Expense
}

export interface Action {
  type: 'ADD' | 'UPDATE' | 'DELETE';
  payload: Payload;
}

export type State = Expense[]

export type ContextValue = {
    expenses: Expense[] | [] ;
    addExpense: (expenseData: Expense) => void;
    deleteExpense: (id: string, expenseData: Expense) => void;
    updateExpense: (id: string) => void;
}

