import * as React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

import Typography from '@mui/material/Typography'

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Dialog from './Dialog'

import moment from 'moment'

import { useDispatch } from 'react-redux'
import { remove } from '../store/eventsSlice'

import { typeToIcon, typeToColor } from '../babyActions'

export default function CustomizedTimeline({ events }) {
    const dispatch = useDispatch()
    const [selectedEvent, setSelectedEvent] = React.useState<null | string>(null)

    // return <>
    //     <Dialog
    //         title={'Would you like to remove this event?'}
    //         subtitle={''}
    //         isOpen={!!selectedEvent}
    //         onAgreeClick={() => dispatch(remove({ start: selectedEvent }))}
    //         onDisagreeClick={() => setSelectedEvent(null)}
    //     />
    //     <div>
    //         {events.map((event) =>
    //             <Box
    //                 sx={{
    //                     display: 'flex',
    //                     flexWrap: 'wrap',
    //                     '& > :not(style)': {
    //                         m: 1,
    //                     },
    //                     width: '100%'
    //                 }}
    //             >
    //                 <Paper elevation={3}>
    //                     <div onClick={() => {
    //                         setSelectedEvent(event.start)
    //                     }}
    //                         key={moment(event.start).toISOString()}>
    //                         <div>{event.title}</div>
    //                         <div style={{ backgroundColor: typeToColor[event.type] }}>
    //                             {typeToIcon[event.type]}
    //                         </div>
    //                         <div>
    //                             {moment(event.start).format('HH:mm')}{' '}
    //                             {!!event.end && ` - ${moment(event.end).format('HH:mm')}`}
    //                         </div>
    //                     </div>
    //                 </Paper>
    //             </Box>
    //         )}
    //     </div>
    // </>


    return (
        <React.Fragment>
            <Dialog
                title={'Would you like to remove this event?'}
                subtitle={''}
                isOpen={!!selectedEvent}
                onAgreeClick={() => dispatch(remove({ start: selectedEvent }))}
                onDisagreeClick={() => setSelectedEvent(null)}
            />
            <Timeline position="right">
                {events.map((event) => {
                    return (
                        <TimelineItem
                            onClick={() => {
                                setSelectedEvent(event.start)
                            }}
                            key={moment(event.start).toISOString()}
                        >
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0', textAlign: 'left' }}
                                variant="body1"
                                color="text.primary"
                                fontWeight={500}
                            >
                                {event.title}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot sx={{ backgroundColor: typeToColor[event.type] }}>
                                    {typeToIcon[event.type]}
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{ m: 'auto 0' }}
                                align="left"
                                variant="body2"
                                color="text.primary"
                            >
                                <Typography>
                                    {moment(event.start).format('HH:mm')}{' '}
                                    {!!event.end && ` - ${moment(event.end).format('HH:mm')}`}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </React.Fragment>
    )
}
