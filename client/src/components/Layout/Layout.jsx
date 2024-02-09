import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Grid } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          maxWidth: { xl: 1200 },
          display: { xl: "flex" },
          margin: { xl: "0 auto" },
        }}
      >
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
