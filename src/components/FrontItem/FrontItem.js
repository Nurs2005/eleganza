import './FrontItem.css'
export default function FrontItem({ item }){
    return(
        <div className="front-item">
            <img className="img" src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.brend}</p>
        </div>
    )
}