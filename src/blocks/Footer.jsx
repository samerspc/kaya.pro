import '../styles/Footer.css';

import arrow from '/arrow.svg'
import arrowW from '/arrowW.svg'
import up from '/upL.svg'
import upW from '/upW.svg'

function Footer({theme}) {

  return (
    <>
        <div className='footer-wrapper'>
            <p className='footer-title'>Понравились наши проекты<span className='geist'>?</span></p>
            <div className='footer-form-wrapper'>
                <img src={theme ? arrow : arrowW} alt="" />
                <p className='footer-form-bigTitle'>Давайте поговорим <span className='geist'>{`:)`}</span></p>
                <p className='footer-form-miniTitle'>Свяжитесь с нами</p>
                <div className='footer-form'>
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ПОЧТА</span>
                        <span className={`footer-form-info-2 ${theme ? 'footer-form-info-2L' : 'footer-form-info-2D'}`}>help@kaya.pro</span>
                    </div>
                    
                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ТЕЛЕГРАМ</span>
                        <span className={`footer-form-info-2 ${theme ? 'footer-form-info-2L' : 'footer-form-info-2D'}`}>kayalabs</span>
                    </div>

                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                    <div className='footer-form-info'>
                        <span className={`footer-form-info-1 ${theme ? 'footer-form-info-1L' : 'footer-form-info-1D'}`}>ЛОКАЦИЯ</span>
                        <span className={`footer-form-info-2 ${theme ? 'footer-form-info-2LR' : 'footer-form-info-2DR'}`} >Россия, Москва</span>
                    </div>

                    <div className={`line ${theme ? 'lineL' : 'lineD'}`}></div>

                </div>
            </div>

            <div className='footer-down'>
                <p><span className='geist'>©2025</span> kaya laboratories</p>
                <a href="#up">
                    <div className={`buttonUp ${ theme ? 'buttonUpLB' : 'buttonUpDB'}`}>
                        <img src={theme ? up : upW} alt="" />
                    </div>
                </a>
            </div>

        </div>
    </>
  )
}

export default Footer
