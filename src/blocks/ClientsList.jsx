import '../styles/ClientsList.css';

import gL from '/gL.svg'
import gD from '/gD.svg'
import aL from '/aL.svg'
import aD from '/aD.svg'
import sL from '/sL.svg'
import sD from '/sD.svg'


function ClientsList({theme}) {

    return (
        <>
            <div className='clientsList-wrapper'>

            {theme ?
            <>
            <img src={sL} alt="" />
            <img src={gL} alt="" />
            <img id='aip' src={aL} alt="" />
            </> 
                :
            <>
            <img src={sD} alt="" />
            <img src={gD} alt="" />
            <img id='aip' src={aD} alt="" />
            </>
            }
            

            </div>
        </>
    )
}

export default ClientsList
