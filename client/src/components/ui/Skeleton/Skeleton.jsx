import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Skeleton as MuiSkeleton } from "@mui/material/";

export default function Skeleton() {
  return (
    <Card sx={{ p: 2, backgroundColor: "rgba(15,9,51,0.5)" }}>
      <Box
        sx={{
          border: "1px solid rgba(240,242,244,0.9)",
          position: "relative",
        }}
      >
        <MuiSkeleton
          sx={{ height: 150, backgroundColor: "rgba(240,242,244,0.2)" }}
          animation="wave"
          variant="rectangular"
        />

        <CardContent sx={{ minHeight: 100 }}>
          <MuiSkeleton
            animation="wave"
            height={10}
            sx={{ marginBottom: 2, backgroundColor: "rgba(240,242,244,0.4)" }}
          />
          <MuiSkeleton
            animation="wave"
            height={10}
            sx={{ backgroundColor: "rgba(240,242,244,0.4)" }}
          />
          <MuiSkeleton
            animation="wave"
            height={10}
            width="30%"
            sx={{ backgroundColor: "rgba(240,242,244,0.5)", my: 3 }}
          />
          <MuiSkeleton
            animation="wave"
            height={10}
            width="30%"
            sx={{ backgroundColor: "rgba(240,242,244,0.5)" }}
          />
        </CardContent>
      </Box>
    </Card>
  );
}
