import React from "react";
import { Box } from "@mui/material";
import { InfoCard } from "@backstage/core-components";

export type TestInfoProps = {
  text?: string;
};

export const TestInfoCard = ({ text = "Some Text" }) => (
  <InfoCard divider={false}>
    <Box
      sx={{
        background: "#006ca1",
        border: "1px solid #00486b",
        color: "#002536",
        "text-align": "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <br />
      <br />
      {text}
      <br />
      <br />
      <br />
    </Box>
  </InfoCard>
);
