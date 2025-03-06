import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Timer: React.FC<{ startTime: string }> = ({ startTime }) => {
    const [elapsedTime, setElapsedTime] = useState(
        moment.duration(moment().diff(moment(startTime)) || 0)
    )

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedTime((prevTime) => moment.duration(prevTime.asMilliseconds() + 1000))
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time
    }

    const hours = elapsedTime.hours()
    const minutes = elapsedTime.minutes()
    const seconds = elapsedTime.seconds()

    return (
        <div>
            {Number(hours) > 0 && <span>{formatTime(hours)}:</span>}
            <span>{formatTime(minutes)}:</span>
            <span>{formatTime(seconds)}</span>
        </div>
    )
}

export default Timer
