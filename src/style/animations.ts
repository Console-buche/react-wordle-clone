import { keyframes } from "@stitches/react";

export const bounce = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.075)" },
  "100%": { transform: "scale(1)" },
});

export const fade = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});
