import React from 'react';
import Logo from '../Logo';
import HeadButtons from './HeadButtons';
import './style.scss';

export function Header() {
   return (
      <div className="header flex justify-content-center">
         <header className="headerContainer flex justify-content-between align-items-center">
            <div className="headerLogo">
               <Logo/>
            </div>
            <HeadButtons/>
         </header>
      </div>
   );
}

export default Header;
