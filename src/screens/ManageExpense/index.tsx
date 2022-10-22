import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, View } from "react-native"
import { deleteExpenseRequest, storeExpenseRequest, updateExpenseRequest } from "../../api";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import ExpenseForm from "../../components/Manage/Form";
import { FormValues } from "../../components/Manage/Form/type";

import Button from "../../components/ui/Button";
import ErrorOverlay from "../../components/ui/ErrorOverlay";
import IconButton from "../../components/ui/IconButton";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { ExpensesContext } from "../../store/Expenses/context";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

const ManageExpense = ({route, navigation}: Props) => {
    const {control, handleSubmit} = useForm<FormValues>()
    const {
        addExpense, 
        deleteExpense, 
        updateExpense,
        expenses
    } = useContext(ExpensesContext)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId
    const selectedExpense = expenses.find(
        expense => expense.id === editedExpenseId
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [isEditing, navigation])

    const deleteExpenseHandler = async () => {
        setIsSubmitting(true)
        try {
            deleteExpenseRequest(editedExpenseId as string)
            deleteExpense(editedExpenseId as string )
            navigation.goBack()
        } catch(err) {
            setError('Could not delete expense - please try again later.')
            setIsSubmitting(false)
        }
    }

    const cancelHandler = () => {
        navigation.goBack()
    } 

    const confirmHandler = async (data: FormValues) => {
        setIsSubmitting(true)
        const {
            description,
            date,
            amount
        } = data

        const formatedData = {
            description,
            date: new Date(date),
            amount: Number(amount)
        }

        const amountIsValid = !isNaN(formatedData.amount) && Number(formatedData.amount) > 0
        const dateIsValid =  formatedData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = formatedData.description.trim().length > 0

        if ( !amountIsValid || !dateIsValid || !descriptionIsValid ) {
            Alert.alert('Invalid input', 'Please check your input values')
            setIsSubmitting(false)
            return
        }

        try {
            if (isEditing) {
                updateExpense(editedExpenseId, formatedData)
                updateExpenseRequest(editedExpenseId, formatedData)
            } else {
                const id = await storeExpenseRequest(formatedData)
                addExpense({...formatedData, id})
            }
            navigation.goBack()
        } catch(err) {
            setError('Could not save data - please try again later.')
            setIsSubmitting(false)
        }

    }

    const errorHandler = () => {
        setError('')
    }

    if (isSubmitting) return <LoadingOverlay />

    if (error) return <ErrorOverlay onConfirm={errorHandler} message={error}/>

    return (
        <View style={styles.container}>
            <ExpenseForm 
                control={control}
                initialValues={selectedExpense || {}}
            />
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} onPress={cancelHandler} outline>Cancel</Button>
                <Button style={styles.button} onPress={handleSubmit(confirmHandler)}>{isEditing ? 'Update' : 'Add'}</Button>
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