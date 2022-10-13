import { FlatList, Text, View } from "react-native"
import { Expense } from "../../../types"

type Props = {
    index: number
    item: Expense
}

const ExpensesItem = ({index, item}: Props) => {
    const {
        description
    } = item

    return (
        <View>
            <Text>{description}</Text>
        </View>
   )
}

export default ExpensesItem