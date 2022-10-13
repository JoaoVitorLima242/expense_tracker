import { Text, View } from "react-native"
import { Expense } from "../../../types"

type Props = {
    periodName: string
    expenses: Expense[]
}

const ExpensesSummary = ({expenses, periodName}: Props) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)
    
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary