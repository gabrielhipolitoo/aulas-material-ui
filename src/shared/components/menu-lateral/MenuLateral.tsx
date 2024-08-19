import { ChildCare } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import React from "react";

interface IChildred {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IChildred> = ({ children }) => {
  return (
    <>
      <Drawer variant="permanent">Teste</Drawer>
      {children}
    </>
  );
};
