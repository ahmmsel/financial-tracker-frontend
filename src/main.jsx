import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/global.css";
import { BrowserRouter } from "react-router-dom";
import { Root } from "@/routes/root.route";
import { ThemeProvider } from "@/components/providers/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
