import { StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import { ExpenseData } from "../../../store/Expenses/type"
import Input from "../Input"
import { CustomControl } from "./type"

type Props = {
    control: CustomControl
}

const ExpenseForm = ({ control }: Props) => {
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
                    />
            </View>
            <Input 
                label="Description"
                control={control} 
                textInputConfig={{
                    multiline: true
                }}
                name='description'
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