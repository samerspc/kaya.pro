import '../styles/Footer.css';

import arrow from '/arrow.svg'
import up from '/up.svg';

function Footer() {

  return (
    <>
        <div className='footer-wrapper'>
            <p className='footer-title'>Понравились наши проекты<span className='geist'>?</span></p>
            <div className='footer-form-wrapper'>
                <img src={arrow} alt="" />
                <p className='footer-form-bigTitle'>Давайте поговорим <span className='geist'>{`:)`}</span></p>
                <p className='footer-form-miniTitle'>Свяжитесь с нами</p>
                <div className='footer-form'>
                    <div className='line'></div>

                    <div className='footer-form-info'>
                        <span className='footer-form-info-1'>ПОЧТА</span>
                        <span className='footer-form-info-2' style={{borderBottom: '1px solid rgba(41, 44, 50, 1)'}}>help@kaya.pro</span>
                    </div>
                    
                    <div className='line'></div>

                    <div className='footer-form-info'>
                        <span className='footer-form-info-1'>ТЕЛЕГРАМ</span>
                        <span className='footer-form-info-2' style={{borderBottom: '1px solid rgba(41, 44, 50, 1)'}}>kayalabs</span>
                    </div>

                    <div className='line'></div>

                    <div className='footer-form-info'>
                        <span className='footer-form-info-1'>ЛОКАЦИЯ</span>
                        <span className='footer-form-info-2'>Россия, Москва</span>
                    </div>

                    <div className='line'></div>

                </div>
            </div>

            <div className='footer-down'>
                <p><span className='geist'>©2025</span> kaya laboratories</p>
                <a href="#up"><img src={up} alt="" /></a>
            </div>

        </div>
    </>
  )
}

export default Footer
