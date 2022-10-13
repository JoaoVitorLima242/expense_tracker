import { View } from "react-native"
import ExpensesList from "../List"
import ExpensesSummary from "../Summary"

const ExpensesOutput = ({ expenses }: any) => {
    return (
        <View>
            <ExpensesSummary />
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput