import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { ThemeProvider } from "@emotion/react";
import { Light } from "./shared/themes/Light.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
