import './WomensBlock.css'
import WomenBG from '../../assets/WomenBG.mp4'
export default function WomensBlock() {
    return (
        <div className="WomenPage">
            <video src={WomenBG} autoPlay muted loop class="WomenBG" />
            <div className="WomenBGTitlse">
                <h4>WOMEN</h4>
                <h2>COLLECTION</h2>
                <button className='button'>discover</button>
            </div>
        </div>
    )
}