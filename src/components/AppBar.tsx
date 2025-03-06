import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from './Dialog'
import CurrentTimeDisplay from './CurrentTimeDisplay'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import Timer from './Timer'
import { teal } from '@mui/material/colors'

import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone'
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone'
import StopCircleTwoToneIcon from '@mui/icons-material/StopCircleTwoTone'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add } from '../store/eventsSlice'

import { RootState } from '../store/store'

export default function ButtonAppBar() {
    const currentEvent = useSelector<RootState, RootState['events']>(
        (state) => state.events.currentEvent
    )
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const [isSure, setIsSure] = React.useState(false)

    return (
        <>
            <AppBar color={'primary'} position="sticky">
                <Dialog
                    title={'This will reset current data'}
                    subtitle={'I recommend doing this only once per day'}
                    isOpen={isSure}
                    onAgreeClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}
                />
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography component="div" sx={{ ml: 1 }}>
                        RHYTHM
                        <div>
                            <CurrentTimeDisplay />
                        </div>
                    </Typography>
                    <SmartToyTwoToneIcon sx={{}} fontSize="large" />
                    <IconButton onClick={handleClick} color="inherit">
                        <MoreVertTwoToneIcon />
                    </IconButton>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem
                            onClick={() => {
                                setIsSure(true)
                            }}
                        >
                            Reset Data
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {currentEvent && (
                <Box
                    sx={{
                        display: 'inline-flex',
                        p: '5px',
                        color: '#fff',
                        flexGrow: 1,
                        position: 'fixed',
                        top: 'auto',
                        bottom: 0,
                        height: 56,
                        width: '100%',
                        backgroundColor: teal[600],
                        zIndex: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography sx={{ mr: 1 }} component="div" fontSize={20} fontWeight={700}>
                            {currentEvent.title}
                        </Typography>
                        <Typography component="div" fontSize={16}>
                            <Timer startTime={currentEvent.start} />
                        </Typography>
                        <IconButton
                            size="large"
                            onClick={() => {
                                dispatch(add({ type: currentEvent.type }))
                            }}
                            color="inherit"
                        >
                            <StopCircleTwoToneIcon fontSize={'large'} />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </>
    )
}
