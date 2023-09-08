/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Create a new context
export const CustomizationContext = createContext();

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

// Add prop type validation
CustomizationProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is a required node
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
