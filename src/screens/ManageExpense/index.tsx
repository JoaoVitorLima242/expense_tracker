import { ParamListBase, RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native"
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

const ManageExpense = ({route, navigation}: Props) => {
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])


    return (
        <View>
            <Text>Manage Expenses Screen!</Text>
        </View>
    )
}

export default ManageExpense