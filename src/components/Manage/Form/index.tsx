import { StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import Input from "../Input"
import { Expense } from "../../../types"
import { CustomControl } from "./type"

type Props = {
    control: CustomControl;
    initialValues?: Expense | {};
}

const ExpenseForm = ({ control, initialValues }: Props) => {
    const {
        date,
        amount = '',
        description = ''
    } = initialValues as Expense

    const formatedDate = date ? date.toISOString().slice(0,10) : ''
    const formatedAmount = amount.toString()

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    label="Amount" 
                    style={styles.rowInput} 
                    control={control}
                    textInputConfig={{
                        keyboardType: 'decimal-pad', 
                    }}
                    name='amount'
                    defaultValue={formatedAmount}
                />
                <Input 
                    label="Date" 
                    style={styles.rowInput}
                    control={control}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10, 
                    }}
                    name='date'
                    defaultValue={formatedDate}
                    />
            </View>
            <Input 
                label="Description"
                control={control} 
                textInputConfig={{
                    multiline: true
                }}
                name='description'
                defaultValue={description}
            />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 20
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
        color: GlobalStyles.colors.primary100,
        marginBottom: 10
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    }
})