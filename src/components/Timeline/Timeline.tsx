import { FC } from 'react'

import './Timeline.css'

const HOURS_IN_DAY = 24

export const Timeline: FC = () => {
    const lines: Array<{ date: Date; formattedTime: string }> = Array.from(Array(HOURS_IN_DAY)).map(
        (line, index) => {
            const today = new Date()

            today.setMinutes(0)
            today.setSeconds(0)

            today.setHours(index)

            const formattedTime = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            }).format(today)

            return { ...line, date: today, formattedTime }
        }
    )

    console.log({ lines })

    return (
        <div>
            <h1>Timeline</h1>
            {lines.map((line, index) => (
                <div className="line" key={`line${index}`}>
                    <p>{index}</p>
                    {line.formattedTime}
                </div>
            ))}
        </div>
    )
}
