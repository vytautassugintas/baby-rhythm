import CribTwoToneIcon from '@mui/icons-material/CribTwoTone'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone'
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone'
import BabyChangingStationTwoToneIcon from '@mui/icons-material/BabyChangingStationTwoTone'
// import SwipeLeftAltTwoToneIcon from '@mui/icons-material/SwipeLeftAltTwoTone'
// import SwipeRightAltTwoToneIcon from '@mui/icons-material/SwipeRightAltTwoTone'
import GamesIcon from '@mui/icons-material/Games';

import { blue, pink, teal, grey, green } from '@mui/material/colors'

export const typeToIcon = {
    ['LEFT']: <ArrowCircleLeftTwoToneIcon />,
    ['RIGHT']: <ArrowCircleRightTwoToneIcon />,
    ['BOTTLE']: <EmojiFoodBeverageTwoToneIcon />,
    ['BURP']: <ChildCareTwoToneIcon />,
    ['CHANGE']: <BabyChangingStationTwoToneIcon />,
    ['SLEEP']: <CribTwoToneIcon />,
    ['TUMMY_TIME']: <GamesIcon />
    // ['PUMP_LEFT']: <SwipeLeftAltTwoToneIcon />,
    // ['PUMP_RIGHT']: <SwipeRightAltTwoToneIcon />,
}

export const typeToColor = {
    ['LEFT']: pink[200],
    ['RIGHT']: pink[200],
    ['BOTTLE']: grey[700],
    ['BURP']: teal[400],
    ['CHANGE']: teal[800],
    ['SLEEP']: blue[900],
    ['TUMMY_TIME']: green[400],
    // ['PUMP_LEFT']: pink[700],
    // ['PUMP_RIGHT']: pink[700],
}


export const actions = [
    // {
    //     icon: <SwipeLeftAltTwoToneIcon />,
    //     name: 'Pump Left',
    //     payload: { type: 'PUMP_LEFT', title: 'Pump Left' },
    // },
    // {
    //     icon: <SwipeRightAltTwoToneIcon />,
    //     name: 'Pump Right',
    //     payload: { type: 'PUMP_RIGHT', title: 'Pump Right' },
    // },
    {
        icon: <ArrowCircleLeftTwoToneIcon />,
        name: 'Feed Left',
        payload: { type: 'LEFT', title: 'Feed Left' },
    },
    {
        icon: <ArrowCircleRightTwoToneIcon />,
        name: 'Feed Right',
        payload: { type: 'RIGHT', title: 'Feed Right' },
    },
    { icon: <ChildCareTwoToneIcon />, name: 'Burp', payload: { type: 'BURP', title: 'Burp' } },
    {
        icon: <BabyChangingStationTwoToneIcon />,
        name: 'Change',
        payload: { type: 'CHANGE', title: 'Change' },
    },
    {
        icon: <EmojiFoodBeverageTwoToneIcon />,
        name: 'Bottle',
        payload: { type: 'BOTTLE', title: 'Bottle' },
    },
    { icon: <CribTwoToneIcon />, name: 'Sleep', payload: { type: 'SLEEP', title: 'Sleep' } },
    { icon: <GamesIcon />, name: 'Tummy Time', payload: { type: 'TUMMY_TIME', title: 'Tummy Time' } },
]
