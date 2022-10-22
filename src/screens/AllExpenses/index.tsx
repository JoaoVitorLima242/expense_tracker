import { useContext } from "react"
import { Text, View } from "react-native"
import ExpensesOutput from "../../components/Expenses/Output"
import { ExpensesContext } from "../../store/Expenses/context"
import { Expense } from "../../types"

const AllExpenses = () => {
    const {expenses} = useContext(ExpensesContext)

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod="Total" />
    )
}

export default AllExpenses