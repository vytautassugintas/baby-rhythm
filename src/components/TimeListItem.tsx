import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Icon } from '@mui/material' // Import Icon for general icons
import { colors } from '@mui/material'

interface TimeListItemProps {
    onClick: () => void
    title: string
    icon: React.ReactNode | string // Allows for Icon components or icon names
    start: string
    end: string
}

const TimeListItem: React.FC<TimeListItemProps> = ({ onClick, title, icon, start, end }) => {
    return (
        <ListItem
            onClick={onClick}
            sx={{ borderBottom: `1px solid ${colors.grey[300]}` }}
            alignItems="flex-start"
        >
            <ListItemIcon>{typeof icon === 'string' ? <Icon>{icon}</Icon> : icon}</ListItemIcon>
            <ListItemText
                primary={title}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {start} - {end}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default TimeListItem
