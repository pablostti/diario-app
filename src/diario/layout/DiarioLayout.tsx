import { Box, Toolbar } from "@mui/material"
import { NavBar, Sidebar } from "../components";

const drawerWidth = 250;

export const DiarioLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <Box sx={{ display: 'flex'}}>
        
        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}/>

            
        {/* Sidebar drawerWidth */}
        <Sidebar drawerWidth={drawerWidth}/>


       
        <Box component='main' sx={{ flexGrow: 1, p: 1 }}>
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
