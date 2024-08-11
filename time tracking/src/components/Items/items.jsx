import './items.css'

function Items(prop){
    return(

        <div id='items' style={{backgroundColor: prop.Color ,backgroundImage:`url(${prop.Img})`}}>
            <div className='content'>
                <div className="contenTop">
                    <span>{prop.Deuration}</span>
                    <div id='dot'>
                        <div></div><div></div><div></div>
                    </div>
                </div>

                <div className="contentBotom">
                    <span>{prop.Time}</span>
                    <label>{prop.Date}</label>
                </div>
            </div>
        </div>
    )
}

export default Items