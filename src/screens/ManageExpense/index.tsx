import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import ExpenseForm from "../../components/Manage/Form";

import Button from "../../components/ui/Button";
import IconButton from "../../components/ui/IconButton";
import { ExpensesContext } from "../../store/Expenses/context";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

const ManageExpense = ({route, navigation}: Props) => {
    const {addExpense, deleteExpense, updateExpense} = useContext(ExpensesContext)
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])

    const deleteExpenseHandler = () => {
        deleteExpense(editedExpenseId as string )
        navigation.goBack()
    }

    const cancelHandler = () => {
        navigation.goBack()
    } 

    const confirmHandler = () => {
        if (isEditing) {
            updateExpense(editedExpenseId, {description: 'Edited', date: new Date(), amount: 200.00})
        } else {
            addExpense({description: 'New Product', date: new Date(), amount: 200.00})
        }
        navigation.goBack()
    }


    return (
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} onPress={cancelHandler} outline>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            <View style={styles.deleteContainer}>
                {isEditing && 
                    <IconButton 
                        icon="trash" 
                        color={GlobalStyles.colors.error500} 
                        size={36} 
                        onPress={deleteExpenseHandler}
                    />
                }
            </View>
        </View>
    )
}

export default ManageExpense

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        margin: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    buttonsContainer:  {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})