import { configureStore } from '@reduxjs/toolkit'
import eventsReducer, { eventsMiddleware, reHydrateEvents } from './eventsSlice'

const store = configureStore({
    reducer: {
        events: eventsReducer,
    },
    preloadedState: reHydrateEvents(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(eventsMiddleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store
