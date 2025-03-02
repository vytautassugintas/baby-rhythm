import { FC, PropsWithChildren, useState, useRef } from 'react'
import {
    Calendar as ReactCalendar,
    View,
    momentLocalizer,
    EventProps,
    EventWrapperProps,
    Event,
} from 'react-big-calendar'
import moment from 'moment'

import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../eventsSlice'

import { useOutsideClick } from '../useOutsideClick'

import './Calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyEventWrapper: FC<EventWrapperProps<Event> & PropsWithChildren> = (props) => {
    const dispatch = useDispatch()
    const [showEventToolbar, setShowEventToolbar] = useState(false)
    const wrapperRef = useRef(null)

    console.log({ wrapperRef, showEventToolbar })

    useOutsideClick(wrapperRef, () => {
        setShowEventToolbar(false)
    })

    console.log({ props })

    return (
        <div
            id={props.label}
            ref={wrapperRef}
            onClick={() => {
                setShowEventToolbar(true)
            }}
            className="my-event"
        >
            {showEventToolbar && (
                <div
                    style={{
                        ...props.style,
                        zIndex: '9999',
                        height: 'auto',
                        backgroundColor: '#f2f2f2',
                        position: 'absolute',
                        top: `${Number(props.style?.top) - 2}%`,
                        right: '14px',
                    }}
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowEventToolbar(false)
                            dispatch(remove(props.event))
                        }}
                        style={{ color: 'red' }}
                    >
                        DELETE
                    </div>
                </div>
            )}
            {props.children}
        </div>
    )
}

const MyEvent: FC<EventProps> = (props) => {
    // console.log({ props })
    return (
        <div style={{ backgroundColor: 'blue' }}>
            <div>{props.title}</div>
        </div>
    )
}

export const Calendar = () => {
    const [view, setView] = useState<View>('day')
    const events = useSelector((state) => state.events.value)

    return (
        <div>
            <ReactCalendar
                components={{ event: MyEvent, eventWrapper: MyEventWrapper }}
                formats={{
                    timeGutterFormat: 'HH:mm',
                    eventTimeRangeFormat: (range) => {
                        const start = moment(range.start).format('HH:mm')
                        const end = moment(range.end).format('HH:mm')

                        return `${start} - ${end}`
                    },
                }}
                scrollToTime={moment().toDate()}
                views={{ week: true, day: true, agenda: true }}
                view={view}
                onView={setView}
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="day"
                events={events}
                style={{ height: '100vh' }}
            />
        </div>
    )
}
