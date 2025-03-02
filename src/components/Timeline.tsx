import * as React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

import Typography from '@mui/material/Typography'

import Dialog from './Dialog'

import moment from 'moment'

import CribTwoToneIcon from '@mui/icons-material/CribTwoTone'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone'
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone'
import BabyChangingStationTwoToneIcon from '@mui/icons-material/BabyChangingStationTwoTone'
import SwipeLeftAltTwoToneIcon from '@mui/icons-material/SwipeLeftAltTwoTone'
import SwipeRightAltTwoToneIcon from '@mui/icons-material/SwipeRightAltTwoTone'

import { blue, pink, teal, grey } from '@mui/material/colors'

import { useDispatch } from 'react-redux'
import { remove } from '../store/eventsSlice'

const typeToIcon = {
    ['LEFT']: <ArrowCircleLeftTwoToneIcon />,
    ['RIGHT']: <ArrowCircleRightTwoToneIcon />,
    ['BOTTLE']: <EmojiFoodBeverageTwoToneIcon />,
    ['BURP']: <ChildCareTwoToneIcon />,
    ['CHANGE']: <BabyChangingStationTwoToneIcon />,
    ['SLEEP']: <CribTwoToneIcon />,
    ['PUMP_LEFT']: <SwipeLeftAltTwoToneIcon />,
    ['PUMP_RIGHT']: <SwipeRightAltTwoToneIcon />,
}

const typeToColor = {
    ['LEFT']: pink[200],
    ['RIGHT']: pink[200],
    ['BOTTLE']: grey[700],
    ['BURP']: teal[400],
    ['CHANGE']: teal[800],
    ['SLEEP']: blue[900],
    ['PUMP_LEFT']: pink[700],
    ['PUMP_RIGHT']: pink[700],
}

export default function CustomizedTimeline({ events }) {
    const dispatch = useDispatch()
    const [selectedEvent, setSelectedEvent] = React.useState<null | string>(null)

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
                                    {!!event.end && ` - ${moment(event.start).format('HH:mm')}`}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </React.Fragment>
    )
}
