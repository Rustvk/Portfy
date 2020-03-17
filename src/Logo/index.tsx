import React from 'react';
import './style.scss';

function Logo() {
   return (
      <div className="logo" title="Portfy - Your portfolio manager">
         <a href="">
            <div className="logoContainer">
               <div className="squareContainer">
                  <div className="fillSquare"/>
                  <div className="emptySquare"/>
               </div>
               <div className="logoText">Portfy</div>
            </div>
         </a>
      </div>
   );
}

export default Logo;