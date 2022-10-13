import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ManageExpenses from "../screens/ManageExpenses";
import ExpensesOverview from "./ExpensesOverview";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="ExpensesOverview" 
                    component={ExpensesOverview} 
                    options={{headerShown: false}}
                />
                <Screen name="ManageExpenses" component={ManageExpenses}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation