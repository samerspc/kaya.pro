import React, { useState, useEffect } from "react";
import "../styles/StickyMenu.css"; 

import sunL from "/sun.svg"
import moonL from "/moon.svg"
import sunD from "/sunD.svg"
import moonD from "/moonD.svg"

const StickyMenu = ({handleSetThemeLight, handleSetThemeDark, theme}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`menu ${visible ? "visible" : "hidden"}`}>
        <p id="logo">kaya studio</p>
        <nav>
            <a href="#" className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Студия</a>
            <a className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Партнеры</a>
            <a className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Проекты</a>
            <a className={theme ? "nav-item nav-itemL" : "nav-item nav-itemD"}>Контакты</a>
            {/* <div className="themeSetter nav-itemL"> */}
            <div className={theme ? 'themeSetter nav-itemL' : 'themeSetter nav-itemD'}>
                { theme ?
                    <>
                    <img src={sunL} alt="" onClick={handleSetThemeLight} className="sun"/>
                    <img src={moonL} alt="" onClick={handleSetThemeDark} className="moon"/>
                    </>
                :
                    <>
                    <img src={sunD} alt="" onClick={handleSetThemeLight} className="sun"/>
                    <img src={moonD} alt="" onClick={handleSetThemeDark} className="moon"/>
                    </>
                }
            </div>
        </nav>
    </div>
  );
};

export default StickyMenu;
