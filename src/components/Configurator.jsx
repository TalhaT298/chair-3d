/* eslint-disable no-unused-vars */
import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const { material, setMaterial,legs,setLegs,chairColors,chairColor,setChairColor,cushionColors,cushionColor,setCushionColor, } = useCustomization(); // Call the hook inside the component

  console.log("material", material);

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item_label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item_label">Fabric</div>
          </div>
        </div>
      </div>


   {/* color add */}
   <div className="configurator__section">
        <div className="configurator__section__title">Chair color</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>


      {/* cushion color */}
      <div className="configurator__section">
        <div className="configurator__section__title">Cushion color</div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="configurator__section">
        <div className="configurator__section__title">Legs</div>
        <div className="configurator__section__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item_label">Modern</div>
          </div>
          <div
             className={`item ${legs === 2 ? "item--active" : ""}`}
             onClick={() => setLegs(2)}
          >
            <div className="item_label">Classic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
