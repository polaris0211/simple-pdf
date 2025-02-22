import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/root.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Pretendard from "../fonts/Pretendard.woff2";
import Box from "@mui/material/Box";
import { createHashRouter, RouterProvider } from "react-router";
import Test from "./pages/test.tsx";
const router = createHashRouter([
  { path: "/", element: <Root /> },
  { path: "/test", element: <Test /> },
]);
const theme = createTheme({
  typography: {
    fontWeightBold: 700,
    fontWeightMedium: 400,
    fontWeightLight: 200,
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
	font-family: 'Pretendard';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url('${Pretendard}') format('woff2-variations');
}
      `,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ fontFamily: "Pretendard" }}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
