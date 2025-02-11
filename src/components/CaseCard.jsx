import { useState } from 'react';

import ImageSlider from './ImageSlider';

import '../styles/CaseCard.css';
import '../styles/CaseCardFocus.css'

function CaseCard({caseItem, theme}) {

    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {
        setOpen(true);
        document.body.classList.add("overflowHidden");
    }
    const handleModalClose = () => {
        setOpen(false);
        document.body.classList.remove("overflowHidden");
    }

    return (
        <>
        <div className={`CaseCard-wrapper ${theme ? 'CaseCard-wrapperHoverL' : 'CaseCard-wrapperHoverD'}`} onClick={() => handleModalOpen()}>
            <div className='CaseCard-imgLayer'>
                <img src={caseItem.img} alt="" />
            </div>
            <p className='CaseCard-name'>{caseItem.name}</p>
            <p className={`CaseCard-shortDescription ${theme ? 'CaseCard-srtDscpL' : 'CaseCard-srtDscpD'}`}>{caseItem.short}</p>
        </div>
        <div className={`CaseCard-modal-layer ${open ? 'open' : ''}`} onClick={() => handleModalClose()}>
            
        </div>
        <div className={`CaseCard-modal-wrapper ${open ? 'open' : ''} ${theme ? 'modalWrapperL' : 'modalWrapperD'}`}>

            <div className={`CaseCard-modal-wrapper-close ${theme ? 'CaseCard-modal-wrapper-closeL' : 'CaseCard-modal-wrapper-closeD'}`} onClick={() => handleModalClose()}>
                Закрыть
            </div>
            
            <div className='CaseCard-modal-wrapper-info'>
                <h1>{caseItem.name}</h1>
                <h2>{caseItem.long}</h2>
                <a href="#" className={`${ theme ? 'CaseCard-modal-wrapper-info-aL' : 'CaseCard-modal-wrapper-info-aD'}`}>
                    {caseItem.link}
                </a>
            </div>

            <ImageSlider images={[caseItem.img, caseItem.img1]}/>
        </div>
        </>
    )
}

export default CaseCard
