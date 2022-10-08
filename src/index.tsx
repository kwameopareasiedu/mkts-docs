import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyle } from "./components";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace"
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
