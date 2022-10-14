import { ParamListBase, RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

const ManageExpense = ({route}: Props) => {
    const editedExpenseId = route.params?.expenseId

    return (
        <View>
            <Text>Manage Expenses Screen!</Text>
        </View>
    )
}

export default ManageExpense