import * as React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

import Typography from '@mui/material/Typography'

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
import { add } from '../store/eventsSlice'

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
    return (
        <Timeline position="right">
            {events.map((event) => {
                return (
                    <TimelineItem key={moment(event.start).toISOString()}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.primary"
                        >
                            {moment(event.start).format('HH:mm')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: typeToColor[event.type] }}>
                                {typeToIcon[event.type]}
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.primary"
                        >
                            {event.title}
                        </TimelineContent>
                    </TimelineItem>
                )
            })}

            {/* <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem> */}
        </Timeline>
    )
}
