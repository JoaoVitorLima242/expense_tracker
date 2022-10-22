import { View } from "react-native"
import Input from "../Input"

const ExpenseForm = () => {
    
    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: () => {}
            }}/>
            <Input label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}/>
            <Input label="Description" textInputConfig={{
                onChangeText: () => {},
                multiline: true
            }}/>
        </View>
    )
}

export default ExpenseForm