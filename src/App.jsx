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
    './stk_logo.svg',
    './client.svg',
    './client.svg',
    './client.svg',
    './client.svg',
  ]

  const cases = [
    {
      name: 'GIR',
      short: 'Многофункциональная инжиниринговая компания',
      img: './casegir.png',
      long: 'Обновили дизайн и разработали сайт для одной из ведущих проектно-инжиниринговных компаний в стране. Улучшили навигацию, структуру и функциональность для удобства клиентов и партнеров. Разработали админ-панель для редактирования контента сайта без вмешательства разработчиков.',
      link: 'girproject.ru'
    },
    {
      name: 'Art in PEC',
      short: 'Производство инновационных строительных технологий и материалов',
      img: './artinpec.png',
      long: "Перенесли сайт с хостинга Tilda на сервер, интегрировали нейронную сеть, которая создает визуализацию фотобетона по вашей картинке, перевели сайт на 3 дополнительных языка.",
      link: 'art-in-pec.com'
    },
    {
      name: 'СТК',
      short: 'Транспортная компания',
      img: './stk.png',
      long: 'Сотрудничаем с транспортной компанией – нам предстоит разработать корпоративный сайт и брендбук с полного нуля. Скоро сможете увидеть плоды нашей работы!',
      link: '*в разработке'
    },
    {
      name: 'Polina Mitutneva',
      short: 'Индивидуальный бизнес-коучинг',
      img: './pm.png',
      long: 'Разработали масштабный корпоративный сайт для бизнес-коуча с улучшенной навигацией, личным брендингом и интеграцией онлайн-записей на консультации.',
      link: 'polina-mitut.ru'
    },
    {
      name: 'Knitted',
      short: 'Онлайн-магазин с крутыми винтажными вещами в Москве.',
      img: './knitted.png',
      long: 'Разрабатываем айдентику и сайт для магазина лимитированных кроссовок и винтажной одежды.',
      link: '*в разработке'
    },
    {
      name: 'Vacancy bot',
      short: 'Telegram-бот для школы дизайна',
      img: './vb.png',
      long: 'Наш один из самых интересных и сложных проектов – реализовали телеграм-бота по поиску работы начинающим веб-дизайнерам. Бот собирает вакансии и заказы из десятков телеграм-каналов, фильтрует их через нейросеть Llama-2-70B и отправляет в личные сообщения.',
      link: null
    },
  ]

  return (
    <>
      <StickyMenu handleSetTheme={handleSetTheme} theme={theme}/>
      <Title theme={theme} />
      
      <Heading text={'Студия'} count={'3'} id={'studio'} text_2={false} theme={theme}/>
      <Studio theme={theme}/>
      
      <Heading text={'Партнеры'} count={'3'} id={'clients'} text_2={'Нашим решениям доверяют топовые компании страны'} theme={theme}/>
      <ClientsList theme={theme}/>

      <Heading text={'Проекты'} count={'3'} id={'projects'} text_2={false} theme={theme}/>
      <CaseList cases={cases} theme={theme}></CaseList>

      <Footer theme={theme}/>
    </>
  )
}

export default App
