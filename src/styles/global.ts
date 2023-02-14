import { css } from "@emotion/react";
import { color } from "@/styles/vars";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Roboto:wght@400;500;700;900&family=Rowdies&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0; // added
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    color: ${color.text};
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
    appearance: none;
    background: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }
`;
