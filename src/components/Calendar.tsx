import { FC, PropsWithChildren, useState, useRef } from 'react'
import Timeline from './Timeline'
import Fab from './Fab'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Calendar = () => {
    const events = useSelector<RootState, RootState['events']>((state) => state.events)

    return (
        <div style={{ minHeight: '100vh' }}>
            <button
                onClick={() => {
                    localStorage.clear('events')
                    window.location.reload()
                }}
            >
                Debug delete data
            </button>
            <Timeline events={events.value} />
            <Fab />
        </div>
    )
}
