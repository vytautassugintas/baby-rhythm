import moment from 'moment'
import { createSlice } from '@reduxjs/toolkit'

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        value: [
            {
                type: 'INITIAL',
                start: moment().subtract(2, 'hour').toDate(),
                end: moment().subtract(3, 'hour').toDate(),
                title: 'Some title',
            },
            {
                type: 'INITIAL',
                start: moment().subtract(5, 'hour').toDate(),
                end: moment().subtract(6, 'hour').toDate(),
                title: 'Some other title',
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value.push({
                start: moment().toDate(),
                end: moment().add(15, 'minutes').toDate(),
                type: action?.payload?.type,
                title: action?.payload?.title,
            })
        },
        remove: (state, action) => {
            console.log({ action, date: moment(action.payload.start).toISOString() })

            state.value = state.value.filter((e) => {
                console.log({ state: moment(e.start).toISOString() })
                console.log({ payload: moment(action.payload.start).toISOString() })
                return moment(e.start).toISOString() !== moment(action.payload.start).toISOString()
            })
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, remove } = eventsSlice.actions

export default eventsSlice.reducer
