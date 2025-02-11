import { useState } from 'react';

import '../styles/CaseCard.css';
import '../styles/CaseCardFocus.css'

function CaseCard({caseItem, theme}) {

    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {setOpen(true);}
    const handleModalClose = () => {setOpen(false);}

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
        <div className={`CaseCard-modal-wrapper ${open ? 'open' : ''} `}>

        </div>
        </>
    )
}

export default CaseCard
