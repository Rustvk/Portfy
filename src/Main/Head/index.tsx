import React from 'react';
import './style.scss';

function Head() {
   return (
      <div className="head">
         <div className="headContainer">
            <div>
               <h1 className="corbel headText">
                  Create your portfolio and share it
               </h1>
               <h2 className="corbel headDescription">
                  Choose professional types, upload works,
                  customize your own style
               </h2>
               <button className="primaryButton largeMarginTop">
                  Let’s start
               </button>
            </div>
         </div>
      </div>
   );
}

export default Head;
