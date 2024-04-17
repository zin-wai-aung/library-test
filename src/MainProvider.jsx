import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

const MainProvider = ({ children }) => {
  return (
    <CustomProvider theme="dark">
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </CustomProvider>
  );
};

export default MainProvider;
