import { Skeleton as MuiSkeleton } from "@mui/material";

export default function Skeleton() {
  return (
    <>
      <MuiSkeleton variant="rectangular" width={210} height={118} />
      <MuiSkeleton width={210} height={30} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={210} height={60} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={70} height={30} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={70} height={30} sx={{ marginTop: "3px" }} />
    </>
  );
}
