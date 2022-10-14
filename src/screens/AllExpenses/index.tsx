import { Text, View } from "react-native"
import ExpensesOutput from "../../components/Expenses/Output"
import { Expense } from "../../types"

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

const AllExpenses = () => {
    return (
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Last 7 days" />
    )
}

export default AllExpenses