import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

type Results = {
  danger: any[];
  warning: any[];
};

interface PanelContentProps {
  results: Results;
  fetchData: () => void;
  clearData: () => void;
}

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent: React.FC<PanelContentProps> = ({
  results,
  fetchData,
  clearData,
}) => (
  <div>
    <h3>Figma Frame Update</h3>
    <iframe
      src={`https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoAOpHRBu6Tj91ogYdeVXIY%2FComponents-Handoff%3Ftype%3Ddesign%26node-id%3D2%253A35666%26mode%3Ddesign%26t%3DoJsoyISrR2GdbYCf-1`}
      style={{ width: "100%", height: "400px" }}
      allowFullScreen
    ></iframe>
  </div>
);
