import './MensBlock.css'
import MenBG from './../../assets/menbg.jpg'
export default function MensBlock(){
    return(
        <div className="MensPage">
            <img className='MensPageBG' src={MenBG} alt="" />
            <div className="MensBGTitlse">
                <h4>MEN</h4>
                <h2>COLLECTION</h2>
                <button className='button'>discover</button>
            </div>
        </div>
    )
}