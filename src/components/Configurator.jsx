/* eslint-disable no-unused-vars */
import React from 'react';
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const { material, setMaterial } = useCustomization(); // Call the hook inside the component

  console.log("material", material);

  return (
    <div className='configurator'>
      <div className='configurator__section'>
        <div className='configurator__section__title'>
          Chair material
        </div>
        <div className='configurator__section__values'>
          <div className='item' onClick={() => setMaterial('leather')}>
            <div className='item_label'>
              Leather
            </div>
          </div>
          <div className='item' onClick={() => setMaterial('fabric')}>
            <div className='item_label'>
              Fabric
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
