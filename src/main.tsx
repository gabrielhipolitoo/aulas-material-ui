import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/index.tsx";
import { AppThemeProvider } from "./shared/contexts";

const { router } = AppRoutes();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
=======
import { BrowserRouter,  } from "react-router-dom";
import { AppRoutes } from "./routes/index.tsx";
import { AppThemeProvider } from "./shared/contexts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider
    ><BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
>>>>>>> parent of 841ca8f (feat: create drawer)
    </AppThemeProvider>
  </StrictMode>
);
