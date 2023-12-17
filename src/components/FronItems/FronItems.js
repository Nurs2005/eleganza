import './FronItems.css'
import React,{useState} from "react"
import FrontItem from "../FrontItem/FrontItem"
export default function FronItems(){
    const [items,setItems] = useState([{
        "id": 2,
        "brend": "Michael Kors",
        "shopCotegory": "brends",
        "url": "https://www.michaelkors.com/",
        "img": "https://michaelkors.scene7.com/is/image/MichaelKors/CH3805C4R4-0596_1?$medium$",
        "title": "Red Suede Jacket",
        "price": "449$",
        "for": "men",
        "cotegory": "jacket",
        "URL": "https://www.michaelkors.com/suede-jacket/CH3805C4R4.html"
    },
    {
        "id": 7,
        "brend": "Calvin Klein",
        "shopCotegory": "brends",
        "url": "https://www.calvinklein.us/en",
        "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/21651899_030_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        "title": "Monogram Logo Fleece Crewneck Sweatshirt",
        "price": "38$",
        "for": "men",
        "cotegory": "clothes",
        "URL": "https://www.calvinklein.us/en/men/apparel/tops/monogram-logo-fleece-crewneck-sweatshirt/21651899-030.html?journey=Tier_0000024"
    },
    {
        "id": 8,
        "brend": "Michael Kors",
        "shopCotegory": "brends",
        "url": "https://www.michaelkors.com/",
        "img": "https://michaelkors.scene7.com/is/image/MichaelKors/32F3GT9C0M-0705_1?$medium$",
        "title": "Jet Set Charm Small Metallic Pebbled Leather Pochette",
        "price": "149$",
        "for": "women",
        "cotegory": "handbag",
        "URL": "https://www.michaelkors.com/jet-set-charm-small-metallic-pebbled-leather-pochette/32F3GT9C0M.html"
    },])
    console.log(items)
    return(
        <div className="front-items">
            <div className="frontItemsBlock">
            {items.map(item => (
                <FrontItem key={item.id} item={item} />
            ))}
            </div>
        </div>
    )
}