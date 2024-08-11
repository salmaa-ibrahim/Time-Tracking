import './leftside.css'
import Img from '../../assets/images/image-jeremy.png'

function LeftSide() {
    return(
        <div id='leftSide'>
            <div id="leftSideTop">
                <div id="img">
                    <img src={Img} alt="" />
                </div>
                <div id="txt">
                    <label>Report for</label>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div id="leftSideBotom">
                <h3>Daily</h3>
                <h3>Weekly</h3>
                <h3>Monthly</h3>
            </div>

        </div>
    )
}

export default LeftSide