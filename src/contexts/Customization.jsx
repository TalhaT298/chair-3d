/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

//color add
const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];
// Create a new context
export const CustomizationContext = createContext();

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
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
