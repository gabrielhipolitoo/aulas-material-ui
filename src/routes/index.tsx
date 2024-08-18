import { createBrowserRouter, Navigate } from "react-router-dom";

export {};
export const router = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element: <p>Pagina teste</p>,
  },
  {
    path: "*",
    element: <Navigate to="pagina-inicial" />,
  },
]);
