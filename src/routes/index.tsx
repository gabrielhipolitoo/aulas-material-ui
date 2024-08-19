import { Button } from "@mui/material";
<<<<<<< HEAD
import { createBrowserRouter, Navigate } from "react-router-dom";
=======
import {  Navigate, Routes,Route } from "react-router-dom";
>>>>>>> parent of 841ca8f (feat: create drawer)
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const {toggleTheme} = useAppThemeContext()
<<<<<<< HEAD
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
=======

  return <Routes>
      <Route path="/" element={<Button  onClick={toggleTheme} variant="contained" color="primary">
          Toggle
        </Button>} />

        <Route path="*" element={<Navigate to="pagina-inicial" />} />
  </Routes>;
>>>>>>> parent of 841ca8f (feat: create drawer)
};
