import { Button } from "@mui/material";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button onClick={toggleTheme} variant="contained" color="primary">
            Toggle
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
