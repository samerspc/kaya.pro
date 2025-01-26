import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from './blocks/title'
import Heading from './components/Heading'
import Studio from './blocks/Studio'
import ClientsList from './blocks/ClientsList'
import CaseList from './blocks/CaseList'
import Footer from './blocks/Footer'

function App() {

  const clients = [
    './client.svg',
    './client.svg',
    './client.svg',
    './client.svg',
    './client.svg',
  ]

  const cases = [
    {
      name: 'Knitted',
      short: 'Онлайн-магазин с крутыми винтажными вещами в Москве',
      img: './knitted.png'
    },
    {
      name: 'Knitted',
      short: 'Онлайн-магазин с крутыми винтажными вещами в Москве',
      img: './knitted.png'
    },
    {
      name: 'Knitted',
      short: 'Онлайн-магазин с крутыми винтажными вещами в Москве',
      img: './knitted.png'
    },
  ]

  return (
    <>
      <Title />
      
      <Heading text={'Студия'} count={'3'} id={'studio-margin'} text_2={false}/>
      <Studio />
      
      <Heading text={'Партнеры'} count={'3'} id={'clients-margin'} text_2={'Нашим решениям доверяют топовые компании страны'}/>
      <ClientsList clients={clients}/>

      <Heading text={'Проекты'} count={'3'} id={'projects-margin'} text_2={false}/>
      <CaseList cases={cases}></CaseList>

      <Footer />
    </>
  )
}

export default App
