import { FlatList, Text, View } from "react-native"

const ExpensesList = ({ expenses }: any) => {
    return (
            <FlatList 
                data={expenses}
                renderItem={() => (
                    <Text>TODO</Text>
                )}
            />
   )
}

export default ExpensesList