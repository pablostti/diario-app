import { StarOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: "10px" }}
    >
      <Grid item xs={12}>
        <StarOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "white" }}> Seleccione o crea una nota </Typography>
      </Grid>

    </Grid>
  );
};
