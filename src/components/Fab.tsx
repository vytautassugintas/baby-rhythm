import * as React from 'react'

import Backdrop from '@mui/material/Backdrop'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import CribTwoToneIcon from '@mui/icons-material/CribTwoTone'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'
import EmojiFoodBeverageTwoToneIcon from '@mui/icons-material/EmojiFoodBeverageTwoTone'
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone'
import BabyChangingStationTwoToneIcon from '@mui/icons-material/BabyChangingStationTwoTone'
import SwipeLeftAltTwoToneIcon from '@mui/icons-material/SwipeLeftAltTwoTone'
import SwipeRightAltTwoToneIcon from '@mui/icons-material/SwipeRightAltTwoTone'

import { useDispatch } from 'react-redux'
import { add } from '../store/eventsSlice'

const actions = [
    {
        icon: <SwipeLeftAltTwoToneIcon />,
        name: 'Pump Left',
        payload: { type: 'PUMP_LEFT', title: 'Pump Left' },
    },
    {
        icon: <SwipeRightAltTwoToneIcon />,
        name: 'Pump Right',
        payload: { type: 'PUMP_RIGHT', title: 'Pump Right' },
    },
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
    {
        icon: <EmojiFoodBeverageTwoToneIcon />,
        name: 'Bottle',
        payload: { type: 'BOTTLE', title: 'Bottle' },
    },
    { icon: <ChildCareTwoToneIcon />, name: 'Burp', payload: { type: 'BURP', title: 'Burp' } },
    {
        icon: <BabyChangingStationTwoToneIcon />,
        name: 'Change',
        payload: { type: 'CHANGE', title: 'Change' },
    },
    { icon: <CribTwoToneIcon />, name: 'Sleep', payload: { type: 'SLEEP', title: 'Sleep' } },
]

import Fab from '@mui/material/Fab'

export default function SpeedDialTooltipOpen() {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleActionClick = (payload: (typeof actions)['0']['payload']) => {
        dispatch(add(payload))
        setAnchorEl(null)
    }

    return (
        <div>
            <Fab onClick={handleClick} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                <SpeedDialIcon />
            </Fab>
            <Backdrop open={open} />
            <Menu
                sx={{ minWidth: '300px' }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuList sx={{ minWidth: '200px' }}>
                    {actions.map((action) => (
                        <MenuItem
                            key={action.name}
                            onClick={() => {
                                handleActionClick(action.payload)
                            }}
                        >
                            <ListItemIcon>{action.icon}</ListItemIcon>
                            <ListItemText>{action.name}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </div>
    )
}
