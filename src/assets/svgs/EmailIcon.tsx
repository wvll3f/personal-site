import React from "react";
import { svgProps } from "./githubIcon";

function EmailIcon({ width, height, fill, style }: svgProps) {
  return (
    <div className={`${style}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"></path>
          <path
            fill="#09244BFF"
            d="M2.068 5.482l8.875 8.876a1.5 1.5 0 002.008.103l.114-.103 8.869-8.87c.029.11.048.222.058.337L22 6v12a2 2 0 01-1.85 1.995L20 20H4a2 2 0 01-1.995-1.85L2 18V6c0-.12.01-.236.03-.35l.038-.168zM20 4c.121 0 .24.01.355.031l.17.039-8.52 8.52-8.523-8.522c.11-.03.224-.05.34-.06L4 4h16z"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default EmailIcon;
