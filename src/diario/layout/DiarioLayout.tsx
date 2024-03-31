import { Box } from "@mui/material"

const drawerWidth = 240;

export const DiarioLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <Box sx={{ display: 'flex'}}>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

            {children}
        </Box>
    </Box>
  )
}
