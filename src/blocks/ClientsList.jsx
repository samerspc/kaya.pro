import '../styles/ClientsList.css';

function ClientsList({clients}) {

    return (
        <>
            <div className='clientsList-wrapper'>
                {clients.map((item, index) => (
                    <img src={item} key={index} alt="" />
                ))}
            </div>
        </>
    )
}

export default ClientsList
