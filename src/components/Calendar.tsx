import { useState } from 'react';
import { Calendar as ReactCalendar, View, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import './Calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const Calendar = () => {
    const [view, setView] = useState<View>('day');

    const events = [
        {
            start: moment().toDate(),
            end: moment()
                .add(1, "hour")
                .toDate(),
            title: "Some title"
        },
        {
            start: moment().add(1, 'hour').toDate(),
            end: moment()
                .add(2, "hour")
                .toDate(),
            title: "Some other title"
        }
    ]

    return <div>
        <ReactCalendar
            scrollToTime={moment().toDate()}
            views={{ week: true, day: true, agenda: true }}
            view={view}
            onView={setView}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="day"
            events={events}
            style={{ height: "100vh" }}
        />
    </div>
}