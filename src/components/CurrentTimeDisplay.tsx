import React, { useState, useEffect } from 'react'
import moment from 'moment'

const CurrentTimeDisplay: React.FC<{
    showSeconds?: boolean
    timeFromNow?: boolean
    startTime: string
}> = ({ showSeconds = false, timeFromNow = false }) => {
    const format = showSeconds ? 'HH:mm:ss' : 'HH:mm'
    const [currentTime, setCurrentTime] = useState<string>(moment().format(format))

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setCurrentTime(timeFromNow ? moment().fromNow(false) : moment().format(format))
            },
            showSeconds ? 1000 : 10000
        )

        return () => clearInterval(intervalId)
    }, [])

    return currentTime
}

export default CurrentTimeDisplay
