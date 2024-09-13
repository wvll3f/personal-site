import React from "react";
import { svgProps } from "./githubIcon";

function LinkedinIcon({ width, height, fill, style }: svgProps) {
  return (
    <div className={`${style}`}>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"></path>
          <path
            fill="#09244BFF"
            d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zM8 10a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm3-1a1 1 0 00-1 1v6a1 1 0 102 0v-3.66c.305-.344.82-.748 1.393-.993.333-.142.834-.2 1.182-.09a.55.55 0 01.293.188c.052.07.132.226.132.555v4a1 1 0 002 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 00-1.301-.907c-.902-.283-1.901-.126-2.568.16a5.82 5.82 0 00-.623.312A1 1 0 0011 9zM8 7a1 1 0 100 2 1 1 0 000-2z"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default LinkedinIcon;