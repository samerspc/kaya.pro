import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from './blocks/Title'
import Heading from './components/Heading'
import Studio from './blocks/Studio'
import ClientsList from './blocks/ClientsList'
import CaseList from './blocks/CaseList'
import Footer from './blocks/Footer'
import StickyMenu from './components/StickyMenu'

function App() {

  const [theme, setTheme] = useState(true);
  document.body.classList.add("bodyL");

  const handleSetTheme = () => {
    if (theme) {
      setTheme(false);
      document.body.classList.add("bodyD");
      document.body.classList.remove("bodyL");
      document.documentElement.classList.add("htmlBgD");
      document.documentElement.classList.remove("htmlBgL");
    } else {
      setTheme(true);
      document.body.classList.add("bodyL");
      document.body.classList.remove("bodyD");
      document.documentElement.classList.add("htmlBgL");
      document.documentElement.classList.remove("htmlBgD");
    }
  }

  const show = () => {
    console.log(theme)
  }

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
      <StickyMenu handleSetTheme={handleSetTheme} theme={theme}/>
      <Title theme={theme} />
      
      <Heading text={'Студия'} count={'3'} id={'studio-margin'} text_2={false} theme={theme}/>
      <Studio theme={theme}/>
      
      <Heading text={'Партнеры'} count={'3'} id={'clients-margin'} text_2={'Нашим решениям доверяют топовые компании страны'} theme={theme}/>
      <ClientsList clients={clients} theme={theme}/>

      <Heading text={'Проекты'} count={'3'} id={'projects-margin'} text_2={false} theme={theme}/>
      <CaseList cases={cases} theme={theme}></CaseList>

      <Footer theme={theme}/>
    </>
  )
}

export default App
