import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import moment from 'moment'

export default function Event({ event }) {
    return (
        <Box sx={{ minWidth: 275, margin: '6px' }}>
            <Card variant="outlined" sx={{ padding: '6px' }}>
                <React.Fragment>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 16 }}>
                        {event.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
                        {moment(event.start).format('HH:mm')}
                    </Typography>
                </React.Fragment>
            </Card>
        </Box>
    )
}
