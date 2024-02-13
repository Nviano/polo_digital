import { Skeleton as MuiSkeleton } from "@mui/material";

export default function SkeletonModify() {
  return (
    <>
      <MuiSkeleton width={210} height={40} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={210} height={30} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={70} height={30} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={70} height={30} sx={{ marginTop: "3px" }} />
      <MuiSkeleton width={70} height={20} sx={{ marginTop: "3px" }} />
    </>
  );
}
