import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 280 280"
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
      >
        <mask id="subtract">
          <path
            x="0"
            y="0"
            width="280"
            height="280"
            d="M0 53C0 23.7289 23.7289 0 53 0H227C256.271 0 280 23.7289 280 53V227C280 256.271 256.271 280 227 280H53C23.7289 280 0 256.271 0 227V53Z"
            fill="white"
          ></path>
          <rect
            x="0"
            y="30%"
            width="280"
            height="112"
            rx="38"
            fill="black"
            transform="rotate(135 140 140)"
          ></rect>
        </mask>
        <path
          mask="url(#subtract)"
          x="0"
          y="0"
          width="280"
          height="280"
          d="M0 53C0 23.7289 23.7289 0 53 0H227C256.271 0 280 23.7289 280 53V227C280 256.271 256.271 280 227 280H53C23.7289 280 0 256.271 0 227V53Z"
        ></path>
      </svg>

      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginLeft: "0.25rem",
          height: "fit-content",
        }}
      >
        HeadlessUI React Native
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/jamsubu/headlessui-react-native",
  },
  docsRepositoryBase:
    "https://github.com/jamsubu/headlessui-react-native/tree/main/apps/docs",
};

export default config;
