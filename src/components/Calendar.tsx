import { useState, useRef, useEffect } from 'react'
import Timeline from './Timeline'
import Fab from './Fab'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Calendar = () => {
    const events = useSelector<RootState, RootState['events']>((state) => state.events)

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight)
        }, 100)
    }, [])
    return (
        <div>
            <Timeline events={events.value} />
            <Fab />
        </div>
    )
}
