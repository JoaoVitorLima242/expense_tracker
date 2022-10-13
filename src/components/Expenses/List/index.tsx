import { FlatList, Text, View } from "react-native"
import { Expense } from "../../../types"
import ExpensesItem from "../Item"

type Props = {
    expenses: Expense[]
}

const ExpensesList = ({ expenses }: Props) => {
    return (
            <FlatList 
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={ExpensesItem}
            />
   )
}

export default ExpensesList