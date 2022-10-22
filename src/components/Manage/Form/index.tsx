import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../../assets/styles/GlobalStyles"
import Input from "../Input"

const ExpenseForm = () => {
    
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label="Amount" style={styles.rowInput} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: () => {}
                }}/>
                <Input label="Date" style={styles.rowInput} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => {}
                }}/>
            </View>
            <Input label="Description" textInputConfig={{
                    onChangeText: () => {},
                    multiline: true
                }}
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