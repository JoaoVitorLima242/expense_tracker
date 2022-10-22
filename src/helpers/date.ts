import moment from 'moment'

export const formatedDate = (date: Date) => {
    return moment(date).format('MM/DD/YYYY')
}

export const getDateMinusDays = (date: Date, days: number) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}