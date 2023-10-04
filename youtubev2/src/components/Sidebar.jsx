import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/Constants'

const Sidebar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category) => (
                <button>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}

        </Stack>
    )
}

export default Sidebar