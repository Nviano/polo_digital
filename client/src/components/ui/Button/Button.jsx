import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)(() => ({
  border: "2px red solid",
  "&:hover": {
    width: 300,
  },
}));
