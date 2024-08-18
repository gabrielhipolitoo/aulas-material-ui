import { Button } from "@mui/material";
import { createBrowserRouter, Navigate } from "react-router-dom";

export {};
export const router = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element: (
      <Button variant="contained"  color="primary">
        Submit
      </Button>
    ),
  },
  {
    path: "*",
    element: <Navigate to="pagina-inicial" />,
  },
]);
