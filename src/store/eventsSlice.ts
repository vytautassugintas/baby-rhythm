import moment from 'moment'
import { createSlice, Middleware } from '@reduxjs/toolkit'
import { RootState } from './store'

// eslint-disable-next-line
export const eventsMiddleware: Middleware<{}, RootState> = ({ getState }) => {
    return (next) => (action) => {
        console.log({ action })
        const result = next(action)
        localStorage.setItem('eventsData', JSON.stringify(getState()))
        return result
    }
}

export const reHydrateEvents = () => {
    if (localStorage.getItem('eventsData') !== null) {
        return JSON.parse(localStorage.getItem('eventsData') || '')
    }
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        value: [
            {
                type: 'SLEEP',
                start: moment().subtract(2, 'hour').toDate(),
                end: moment().subtract(3, 'hour').toDate(),
                title: 'Sleep',
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            const lastElement = state.value[state.value.length - 1]
            if (lastElement.type === action.payload.type && !lastElement.end) {
                lastElement.end = moment().toDate()
            } else {
                state.value.push({
                    start: moment().toDate(),
                    // end: moment().add(15, 'minutes').toDate(),
                    end: null,
                    type: action?.payload?.type,
                    title: action?.payload?.title,
                })
            }
        },
        remove: (state, action) => {
            state.value = state.value.filter((e) => {
                return moment(e.start).toISOString() !== moment(action.payload.start).toISOString()
            })
        },
        update: (state, action) => {
            state.value = state.value.map((e) => {
                if (moment(e.start).toISOString() !== moment(action.payload.start).toISOString()) {
                    return e
                }
                console.log({ action })
                return e
            })
        },
    },
})

export const { add, remove, update } = eventsSlice.actions

export default eventsSlice.reducer
