import React from "react";
import { svgProps } from "./githubicon";

function LineIcon({ width, height, fill, style }: svgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="20"
      fill="none"
      viewBox="0 0 128 20"
    >
      <path stroke="#09244B" d="M0 9.5L48 9.5"></path>
      <path stroke="#09244B" d="M80 9.5L128 9.5"></path>
      <path
        fill="#09244B"
        d="M64 0H78V14H64z"
        transform="rotate(45 64 0)"
      ></path>
    </svg>
  );
}

export default LineIcon;