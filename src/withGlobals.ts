import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [globals] = useGlobals();
  const myAddon = globals[PARAM_KEY];
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";
  const { theme } = context.globals;

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selector = isInDocs
      ? `#anchor--${context.id} .sb-story`
      : "#storybook-root";

    displayToolState(selector, {
      myAddon,
      isInDocs,
      theme,
    });
  }, [myAddon, theme]);

  return StoryFn();
};

const displayToolState = async (selector: string, state: any) => {
  const rootElements = document.querySelectorAll(selector);
  console.log(rootElements);
  //@ts-ignore
  const imageData = await htmlToImage.toPng(rootElements[0]);
  console.log(imageData);
  const img = new Image();
  img.src = imageData;
  document.body.appendChild(img);
};
