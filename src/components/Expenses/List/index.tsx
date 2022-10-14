import { FlatList, StyleSheet, Text, View } from "react-native"
import { Expense } from "../../../types"
import ExpensesItem from "../Item"

type Props = {
    expenses: Expense[]
}

const ExpensesList = ({ expenses }: Props) => {
    return (
            <FlatList 
                style={styles.container}
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ExpensesItem item={item}/>}
            />
   )
}

export default ExpensesList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    }
})