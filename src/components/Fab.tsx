import * as React from 'react'

import Backdrop from '@mui/material/Backdrop'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

import SpeedDialIcon from '@mui/material/SpeedDialIcon'

import { useDispatch } from 'react-redux'
import { add } from '../store/eventsSlice'

import { actions } from '../babyActions'

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

        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight)
        }, 50)
    }

    return (
        <div>
            <Fab
                color={'primary'}
                onClick={handleClick}
                sx={{ position: 'fixed', bottom: 28, right: 16 }}
            >
                <SpeedDialIcon />
            </Fab>
            <Backdrop open={open} />
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
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
