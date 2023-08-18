import { useState, useEffect } from "react";

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
   const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

   useEffect(() => {
      window.addEventListener("resize", () => {
         setWindowWidth(window.innerWidth);
      });
   }, []);

   return(
      <>
         {windowWidth < 768 ? <NavbarMobile /> : <NavbarDesktop />}
      </>
   )
}