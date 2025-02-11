import React, { useState, useEffect } from "react";

import '../styles/Title.css';

import img from '/KAYAstudio.svg';
import imgMobile from '/KAYAstudioMobile.svg';

function Title({theme}) {

  return (
    <>
      <div className='title-wrapper' id='up'>
        <div className='titile-name'>
            <p>
              <span className={`${theme ? 'titile-nameL1' : 'titile-nameD1'}`}>kaya </span> 
              <span className={`${theme ? 'titile-nameL2' : 'titile-nameD2'}`}>studio</span>
            </p>
        </div>
        <div className='titile-text'>
            <p id='titile-text_1'>
            Разрабатываем сайты <br /> и делаем красивый дизайн
            </p>
            <p id='titile-text_2'>
            Мы – молодая команда, которая помогает развивать бизнес через дизайн и разработку высокого уровня
            </p>
            <p id='titile-text_3' className={`${theme ? 'titile-text_3L' : 'titile-text_3D'}`}>Россия, Москва</p>
        </div>
      </div>
    </>
  )
}

export default Title
