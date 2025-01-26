import '../styles/CaseList.css';

import CaseCard from '../components/CaseCard';

function CaseList({cases}) {

    return (
        <>
            <div className='caseList-wrapper'>
                {
                    cases.map((item, index) => (
                        <CaseCard caseItem={item} key={index}/>
                    ))
                }
            </div>
        </>
    )
}

export default CaseList
