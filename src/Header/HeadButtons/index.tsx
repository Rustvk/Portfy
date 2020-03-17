import React from 'react';
import './style.scss';

function HeadButtons() {

   return (
      <div className="headButtons">
         <button className="smallButton">
            Sign In
         </button>
         <button className="smallButton mediumMarginLeft">
            Sing Up
         </button>
      </div>
   );
}

export default HeadButtons;