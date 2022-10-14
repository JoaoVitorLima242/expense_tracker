export type Expense = {
    id: string;
    description: string;
    amount: number;
    date: Date;
}

export type RootStackParamList = {
    ExpensesOverview: undefined;
    ManageExpense: {expenseId?: string};
}

export type RootBottomTabParamList = {
    AllExpenses: undefined;
    RecentExpenses: undefined;
}