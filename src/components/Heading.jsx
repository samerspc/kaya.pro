import '../styles/Heading.css';

function Heading({text, count, id, text_2}) {

    const style = {

    }


    return (
        <>
        <div className='heading-wrapper' id={id}>
            <span id='heading-text'>{text}</span>
            <span id='heading-count'>
                <span className='geist'>{count}</span>
            </span>

            { text_2 ? 
                <>
                
                <p id='text2'>{text_2}</p>
                </>
                :
                ''
            }
        </div>
        </>
    )
}

export default Heading
