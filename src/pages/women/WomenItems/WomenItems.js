import './WomenItems.css'
export default function WomenItems({ item }) {
    return (
        <div className="item">
            <img className="img" src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.brend}</p>
            <div className='priceButton'>
                <b>{item.price}</b>
                <div className='add-to-cart'>+</div>
            </div>
        </div>
    )
}