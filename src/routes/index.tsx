import { Button } from "@mui/material";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const {toggleTheme} = useAppThemeContext()
  const router = createBrowserRouter([
    {
      path: "/pagina-inicial",
      element: (
        <Button  onClick={toggleTheme} variant="contained" color="primary">
          Toggle
        </Button>
      ),
    },
    {
      path: "*",
      element: <Navigate to="pagina-inicial" />,
    },
  ]);

  return {
    router,
  };
};
