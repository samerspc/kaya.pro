import { useState } from 'react';

import '../styles/CaseCard.css';
import '../styles/CaseCardFocus.css'

function CaseCard({caseItem}) {

    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {setOpen(true);}
    const handleModalClose = () => {setOpen(false);}

    return (
        <>
        <div className='CaseCard-wrapper' onClick={() => handleModalOpen()}>
            <div className='CaseCard-imgLayer'>
                <img src={caseItem.img} alt="" />
            </div>
            <p className='CaseCard-name'>{caseItem.name}</p>
            <p className='CaseCard-shortDescription'>{caseItem.short}</p>
        </div>
        <div className={`CaseCard-modal-layer ${open ? 'open' : ''}`} onClick={() => handleModalClose()}>
            
        </div>
        <div className={`CaseCard-modal-wrapper ${open ? 'open' : ''} `}>

        </div>
        </>
    )
}

export default CaseCard
