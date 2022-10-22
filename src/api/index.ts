import axios from "axios"
import { ExpenseData } from "../store/Expenses/type"
import { Expense } from "../types"

const BACKEND_URL = 'https://react-native-637a1-default-rtdb.firebaseio.com'


export const storeExpense = (expenseData: ExpenseData) => {
    axios.post(
        BACKEND_URL + '/expenses.json',
        expenseData
    )
}

export const getExpenses = async () => {
    const response = await axios.get(BACKEND_URL + '/expenses.json')
    const expenses: Expense[] = []

    for (const key in response.data) {
        const expenseObj: Expense = {
            id: key,
            amount: response.data[key].amount,
            description: response.data[key].description,
            date: response.data[key].date
        }

        expenses.push(expenseObj)
    }

    return expenses
}