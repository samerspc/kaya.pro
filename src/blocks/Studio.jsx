import { useState } from 'react';
import '../styles/Studio.css';

import plus from '/plus.svg';
import wPlus from '/wPlus.svg';

function Studio({theme}) {

    const [open, setOpen] = useState(null);

    const toggleAccordion = (id) => {
        setOpen(open === id ? null : id);
    };

    const data = [
        { id: 1, title: "Веб", content: "Мы разрабатываем веб-сайты, сочетая индивидуальный дизайн, передовые технологии и беспрерывную функциональность для создания удобных, высокопроизводительных платформ." },
        { id: 2, title: "Дизайн", content: "Мы разрабатываем веб-сайты, сочетая индивидуальный дизайн, передовые технологии и беспрерывную функциональность для создания удобных, высокопроизводительных платформ." },
        { id: 3, title: "Разработка", content: "Мы разрабатываем веб-сайты, сочетая индивидуальный дизайн, передовые технологии и беспрерывную функциональность для создания удобных, высокопроизводительных платформ." },
      ];

    return (
        <>
            <div className='studio-wrapper'>
                <div className='studio-text'>
                    <p>
                        Мы сосредоточены на создании веб-сайтов, что позволяет нам постоянно становиться лучше в этой нише и делать каждый ваш проект на максимально высоком уровне
                    </p>
                </div>

                <div className='studio-accordion-wrapper'>
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    {data.map((item, index) => (
                        <>
                        <div key={index}>
                            <div className='accordion-item'
                                onClick={() => toggleAccordion(item.id)}
                                >
                                
                                <p>{item.title}</p>
                                
                                <img src={theme ? plus : wPlus} alt="" 
                                    className={`${open === item.id ? 'rotation' : ''}`}
                                    />
                            
                            </div>
                            
                            <div
                                className={`accordion-content ${
                                    open === item.id ? "open" : "closed"
                                } ${theme ? 'accordion-contentPL' : 'accordion-contentPD'}`}
                                >
                                <p>{item.content}</p>
                            </div>
                        </div>
                        <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Studio
