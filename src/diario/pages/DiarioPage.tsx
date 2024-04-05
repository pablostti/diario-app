import { IconButton } from "@mui/material";
import { DiarioLayout } from "../layout/DiarioLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const DiarioPage = () => {
  return (
    <DiarioLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic recusandae officia deleniti voluptatem provident possimus voluptatibus iusto consequatur. Suscipit doloribus molestiae sapiente at nemo sequi ipsam quidem enim reprehenderit!</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "green",
          ":hover": { backgroundColor: "green", opacity: 0.9},
          position: "fixed",
          right: 20,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </DiarioLayout>
  );
};
