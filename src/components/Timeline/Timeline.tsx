import { FC } from 'react';

import './Timeline.css'

const HOURS_IN_DAY = 24;

export const Timeline: FC = () => {

    const lines = Array.from(Array(HOURS_IN_DAY)).map((line, index) => {
        const today = new Date();

        today.setMinutes(0);
        today.setSeconds(0);

        today.setHours(index)

        return { ...line, date: today }
    });

    console.log({ lines })

    return <div>
        <h1>Timeline</h1>
        {lines.map((line, index) => <div className='line' key={`line${index}`}>
            <p>{index}</p>
            {line.date}
        </div>
        )}


    </div>
}