import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from './Dialog'

export default function ButtonAppBar() {
    const [isSure, setIsSure] = React.useState(false)
    return (
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
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Baby Rhythm
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => {
                        setIsSure(true)
                    }}
                >
                    Reset
                </Button>
            </Toolbar>
        </AppBar>
    )
}
