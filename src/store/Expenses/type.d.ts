import { ReactNode } from "react";
import { Expense } from "../../types";

type Payload = {
    id?: string;
    data?: ExpenseData
    expenses?: Expense[]
}

export type ExpenseData = {
  description: string;
  amount: number;
  date: Date;
}

export interface Action {
  type: 'ADD' | 'UPDATE' | 'DELETE' | 'SET';
  payload: Payload;
}

export type State = Expense[]

export type ContextValue = {
  expenses: Expense[] | [] ;
  addExpense: (expenseData: ExpenseData) => void;
  setExpenses: (expense: Expense[]) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: ExpenseData) => void;
}

export type ProviderProps = {
  children: ReactNode
}