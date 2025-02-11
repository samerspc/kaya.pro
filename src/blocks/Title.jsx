import React, { useState, useEffect } from "react";

import '../styles/Title.css';

import img from '/KAYAstudio.svg';
import imgMobile from '/KAYAstudioMobile.svg';

function Title() {

  return (
    <>
      <div className='title-wrapper' id='up'>
        <div className='titile-name'>
            <p>kaya <span className="lightText-grey">studio</span></p>
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
