import { ReactNode } from "react";
import { Expense } from "../../types";

type Payload = {
    id?: string;
    data?: ExpenseData
}

export type ExpenseData = {
  description: string;
  amount: number;
  date: Date;
}

export interface Action {
  type: 'ADD' | 'UPDATE' | 'DELETE';
  payload: Payload;
}

export type State = Expense[]

export type ContextValue = {
  expenses: Expense[] | [] ;
  addExpense: (expenseData: ExpenseData) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: ExpenseData) => void;
}

export type ProviderProps = {
  children: ReactNode
}