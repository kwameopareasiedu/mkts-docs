import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./components";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Source Sans Pro, sans-serif",
    mono: "Source Code Pro, monospace;"
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/mkts/">
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
