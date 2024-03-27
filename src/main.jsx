import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/global.css";
import { BrowserRouter } from "react-router-dom";
import { Root } from "@/routes/root.route";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Toaster />
          <Root />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
