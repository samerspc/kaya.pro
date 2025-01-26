import React, { useState, useEffect } from "react";

import '../styles/Title.css';

import img from '/KAYAstudio.svg';
import imgMobile from '/KAYAstudioMobile.svg';

function Title() {

  useEffect(() => {
    const options = {
      strings: ['kaya <span style="color: rgba(41, 44, 50, 0.4)">studio</span>'],
      typeSpeed: 100, 
      backSpeed: 1500,
      loop: true,   
      showCursor: false,
      cursorChar: '|',  
    };

    // const typed = new window.Typed("#typed", options);

    // return () => {
    //   typed.destroy();
    // };
  }, []);

  return (
    <>
      <div className='title-wrapper' id='up'>
        <div className='titile-name'>
            {/* <img src={img} alt="" /> */}
            <p>kaya <span style={{color: 'rgba(41, 44, 50, 0.4)'}}>studio</span></p>
            {/* <p id="typed"></p> */}
        </div>
        <div className='titile-text'>
            <p id='titile-text_1'>
            Разрабатываем сайты <br /> и делаем красивый дизайн
            </p>
            <p id='titile-text_2'>
            Мы – молодая команда, которая помогает развивать бизнес через дизайн и разработку высокого уровня
            </p>
            <p id='titile-text_3' >Россия, Москва</p>
        </div>
      </div>
    </>
  )
}

export default Title
