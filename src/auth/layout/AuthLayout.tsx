import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >   
        <Grid item 
            className="box-shadow" 
            xs={3} 
            sx={{ 
                width: { sm: 450 },
                backgroundColor: "white", 
                borderRadius: 2, 
                padding: 3 
            }}
        >
            <Typography variant="h5" align="center" sx={{ mb:1 }} >
                {title}
            </Typography>
            {children}
        </Grid>
    </Grid>
  )
}
