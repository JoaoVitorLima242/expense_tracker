export const formatedDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export const getDateMinusDays = (date: Date, days: number) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}