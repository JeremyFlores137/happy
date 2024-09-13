"use client";

import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: "40%", margin: "auto" }}>
        <CardHeader
          avatar={<WarningIcon color="error" style={{ fontSize: 30 }} />}
          title={<Typography variant="h5">Error</Typography>}
          titleTypographyProps={{ align: "center", fontWeight: "bold" }}
          style={{ textAlign: "center" }}
        />
        <CardContent>
          <Typography variant="body1" color="error" align="center">
            {error.message}
          </Typography>
        </CardContent>
        <CardContent style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => reset()} color="secondary" variant="outlined">
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
