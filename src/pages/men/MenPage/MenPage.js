// import './MenPage.css'
// import React, { useState } from "react"
// // import HeaderBlock from "../../components/HeaderBlock/HeaderBlock"
// import MensItems from "../MensItems/MensItems"
// export default function MenPage() {
//     const [items, setItems] = useState(
//         [
//             {
//                 "id": 1,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/42F9KEFS2Q-0001_1?$medium$",
//                 "title": "Keating Logo and Leather Sneaker",
//                 "price": "126$",
//                 "for": "men",
//                 "cotegory": "shoes",
//                 "URL": "https://www.michaelkors.com/keating-empire-signature-logo-and-leather-sneaker/42H3KEFS4B.html"
//             },
//             {
//                 "id": 2,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/CH3805C4R4-0596_1?$medium$",
//                 "title": "Red Suede Jacket",
//                 "price": "449$",
//                 "for": "men",
//                 "cotegory": "jacket",
//                 "URL": "https://www.michaelkors.com/suede-jacket/CH3805C4R4.html"
//             },
//             {
//                 "id": 4,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/33F3LVAB2L-3142_1?$medium$",
//                 "title": "Varick Leather Backpack",
//                 "price": "373$",
//                 "for": "men",
//                 "cotegory": "bag",
//                 "URL": "https://www.michaelkors.com/varick-leather-backpack/33F3LVAB2L.html"
//             },
//             {
//                 "id": 5,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MLEEPXDX0002-0410_1?$medium$",
//                 "title": "Modern-Fit Wool Blend Suit Pants",
//                 "price": "142$",
//                 "for": "men",
//                 "cotegory": "trousers",
//                 "URL": "https://www.michaelkors.com/modern-fit-wool-blend-suit-pants/MLEEPXDX0002.html"
//             },
//             {
//                 "id": 6,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MK8953-0710_1?$medium$",
//                 "title": "Oversized Hutton Gold-Tone Watch",
//                 "price": "179$",
//                 "for": "men",
//                 "cotegory": "watch",
//                 "URL": "https://www.michaelkors.com/oversized-hutton-gold-tone-watch/MK8953.html"
//             },
//             {
//                 "id": 7,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/21651899_030_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Monogram Logo Fleece Crewneck Sweatshirt",
//                 "price": "38$",
//                 "for": "men",
//                 "cotegory": "clothes",
//                 "URL": "https://www.calvinklein.us/en/men/apparel/tops/monogram-logo-fleece-crewneck-sweatshirt/21651899-030.html?journey=Tier_0000024"
//             },
//             {
//                 "id": 8,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/32F3GT9C0M-0705_1?$medium$",
//                 "title": "Jet Set Charm Small Metallic Pebbled Leather Pochette",
//                 "price": "149$",
//                 "for": "women",
//                 "cotegory": "handbag",
//                 "URL": "https://www.michaelkors.com/jet-set-charm-small-metallic-pebbled-leather-pochette/32F3GT9C0M.html"
//             },
//             {
//                 "id": 9,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MK7454-0040_1?$medium$",
//                 "title": "Runway Silver-Tone Wrap Watch",
//                 "price": "263$",
//                 "for": "women",
//                 "cotegory": "watch",
//                 "URL": "https://www.michaelkors.com/runway-silver-tone-wrap-watch/MK7454.html"
//             },
//             {
//                 "id": 10,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MH381ZPBAC-1088_1?$medium$",
//                 "title": "Embellished Georgette Shift Dress",
//                 "price": "597$",
//                 "for": "women",
//                 "cotegory": "dress",
//                 "URL": "https://www.michaelkors.com/embellished-georgette-shift-dress/MH381ZPBAC.html"
//             },
//             {
//                 "id": 11,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/40S2JOHA1A-0001_1?$medium$",
//                 "title": "Jordyn Patent Leather Platform Sandal",
//                 "price": "116$",
//                 "for": "women",
//                 "cotegory": "shoes",
//                 "URL": "https://www.michaelkors.com/jordyn-patent-leather-platform-sandal/40S2JOHA1A.html"
//             },
//             {
//                 "id": 12,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/77C6300M82-0001_1?$medium$",
//                 "title": "Quilted Puffer Coat",
//                 "price": "134$",
//                 "for": "women",
//                 "cotegory": "jacket",
//                 "URL": "https://www.michaelkors.com/quilted-puffer-coat/77C6300M82.html"
//             },
//             {
//                 "id": 13,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/35H1GTVW2L-0001_1?$medium$",
//                 "title": "Jet Set Medium Saffiano Leather Crossover Wristlet",
//                 "price": "39$",
//                 "for": "women",
//                 "cotegory": "wallet",
//                 "URL": "https://www.michaelkors.com/jet-set-medium-saffiano-leather-crossover-wristlet/35H1GTVW2L.html"
//             },
//             {
//                 "id": 14,
//                 "brend": "Michael Kors",
//                 "shopCotegory": "brends",
//                 "url": "https://www.michaelkors.com/",
//                 "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MKJ8053-0710_1?$medium$",
//                 "title": "Precious Metal-Plated Brass Chain Link Bracelet",
//                 "price": "132$",
//                 "for": "women",
//                 "cotegory": "accessory",
//                 "URL": "https://www.michaelkors.com/precious-metal-plated-brass-chain-link-bracelet/MKJ8053.html"
//             },
//             {
//                 "id": 15,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/25301002_020_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Tailored Slim Pants",
//                 "price": "89$",
//                 "for": "men",
//                 "cotegory": "trousers",
//                 "URL": "https://www.calvinklein.us/en/men/apparel/bottoms/tailored-slim-pants/25301002-020.html?journey=Tier_0000024"
//             },
//             {
//                 "id": 16,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/35000340_015_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Monogram Logo Beanie",
//                 "price": "20$",
//                 "for": "men",
//                 "cotegory": "headdress",
//                 "URL": "https://www.calvinklein.us/en/men/accessories/hats/monogram-logo-beanie/35000340-015.html?journey=searchResultPage"
//             },
//             {
//                 "id": 17,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/82002004_032_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Men's Arnel Sneaker",
//                 "price": "60$",
//                 "for": "men",
//                 "cotegory": "shoes",
//                 "URL": "https://www.calvinklein.us/en/men/accessories/hats/monogram-logo-beanie/35000340-015.html?journey=searchResultPage"
//             },
//             {
//                 "id": 18,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/81301491_001_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Women's Carcie Dress Pump",
//                 "price": "72$",
//                 "for": "women",
//                 "cotegory": "shoes",
//                 "URL": "https://www.calvinklein.us/en/women/shoes/heels/womens-carcie-dress-pump/81301491-001.html?journey=Tier_0000023"
//             },
//             {
//                 "id": 19,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/14903752_241_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Short Puffer Jacket",
//                 "price": "113$",
//                 "for": "women",
//                 "cotegory": "jacket",
//                 "URL": "https://www.calvinklein.us/en/women/apparel/womens-outerwear/short-puffer-jacket/14903752-241.html?journey=Tier_0000021"
//             },
//             {
//                 "id": 20,
//                 "brend": "Calvin Klein",
//                 "shopCotegory": "brends",
//                 "url": "https://www.calvinklein.us/en",
//                 "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/37400669_642_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "Elemental Chain Pouch",
//                 "price": "42$",
//                 "for": "women",
//                 "cotegory": "handbag",
//                 "URL": "https://www.calvinklein.us/en/women/accessories/bags/elemental-chain-pouch/37400669-642.html?journey=Tier_0000022"
//             },
//             {
//                 "id": 21,
//                 "brend": "Tommy Hilfiger",
//                 "shopCotegory": "brends",
//                 "url": "https://usa.tommy.com/en",
//                 "img": "https://shoptommy.scene7.com/is/image/ShopTommy/78J9503_FAP_FNT?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "EMBROIDERED TOMMY LOGO HOODIE",
//                 "price": "68$",
//                 "for": "men",
//                 "cotegory": "clothes",
//                 "URL": "https://usa.tommy.com/en/men/clothing/tops/embroidered-tommy-logo-hoodie/78J9503-FAP.html?journey=Tier_18482838"
//             },
//             {
//                 "id": 22,
//                 "brend": "Tommy Hilfiger",
//                 "shopCotegory": "brends",
//                 "url": "https://usa.tommy.com/en",
//                 "img": "https://shoptommy.scene7.com/is/image/ShopTommy/AM11812_PKB_FNT?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//                 "title": "HILFIGER LOGO MINI MESSENGER",
//                 "price": "90$",
//                 "for": "men",
//                 "cotegory": "handbag",
//                 "URL": "https://usa.tommy.com/en/men/shoes-accessories/bags-wallets/hilfiger-logo-mini-messenger/AM11812-PKB.html?journey=Tier_18482838"
//             }
//         ])
//     console.log(items)
//     const menProduct = items.filter(item => item.for === "men")
//     return (
//         <div>

//             <div className="front-items">
//                 {menProduct.map(item => (
//                     <MensItems key={item.id} item={item} />
//                 ))}
//             </div>
//         </div>
//     )
// }



import React, { useState } from "react";
import MensItems from "../MensItems/MensItems";
import './MenPage.css';

export default function MenPage() {
    const [items, setItems] = useState([
        {
            "id": 1,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/42F9KEFS2Q-0001_1?$medium$",
            "title": "Keating Logo and Leather Sneaker",
            "price": "126$",
            "for": "men",
            "cotegory": "shoes",
            "URL": "https://www.michaelkors.com/keating-empire-signature-logo-and-leather-sneaker/42H3KEFS4B.html"
        },
        {
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
            "id": 4,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/33F3LVAB2L-3142_1?$medium$",
            "title": "Varick Leather Backpack",
            "price": "373$",
            "for": "men",
            "cotegory": "bag",
            "URL": "https://www.michaelkors.com/varick-leather-backpack/33F3LVAB2L.html"
        },
        {
            "id": 5,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MLEEPXDX0002-0410_1?$medium$",
            "title": "Modern-Fit Wool Blend Suit Pants",
            "price": "142$",
            "for": "men",
            "cotegory": "trousers",
            "URL": "https://www.michaelkors.com/modern-fit-wool-blend-suit-pants/MLEEPXDX0002.html"
        },
        {
            "id": 6,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MK8953-0710_1?$medium$",
            "title": "Oversized Hutton Gold-Tone Watch",
            "price": "179$",
            "for": "men",
            "cotegory": "watch",
            "URL": "https://www.michaelkors.com/oversized-hutton-gold-tone-watch/MK8953.html"
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
        },
        {
            "id": 9,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MK7454-0040_1?$medium$",
            "title": "Runway Silver-Tone Wrap Watch",
            "price": "263$",
            "for": "women",
            "cotegory": "watch",
            "URL": "https://www.michaelkors.com/runway-silver-tone-wrap-watch/MK7454.html"
        },
        {
            "id": 10,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MH381ZPBAC-1088_1?$medium$",
            "title": "Embellished Georgette Shift Dress",
            "price": "597$",
            "for": "women",
            "cotegory": "dress",
            "URL": "https://www.michaelkors.com/embellished-georgette-shift-dress/MH381ZPBAC.html"
        },
        {
            "id": 11,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/40S2JOHA1A-0001_1?$medium$",
            "title": "Jordyn Patent Leather Platform Sandal",
            "price": "116$",
            "for": "women",
            "cotegory": "shoes",
            "URL": "https://www.michaelkors.com/jordyn-patent-leather-platform-sandal/40S2JOHA1A.html"
        },
        {
            "id": 12,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/77C6300M82-0001_1?$medium$",
            "title": "Quilted Puffer Coat",
            "price": "134$",
            "for": "women",
            "cotegory": "jacket",
            "URL": "https://www.michaelkors.com/quilted-puffer-coat/77C6300M82.html"
        },
        {
            "id": 13,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/35H1GTVW2L-0001_1?$medium$",
            "title": "Jet Set Medium Saffiano Leather Crossover Wristlet",
            "price": "39$",
            "for": "women",
            "cotegory": "wallet",
            "URL": "https://www.michaelkors.com/jet-set-medium-saffiano-leather-crossover-wristlet/35H1GTVW2L.html"
        },
        {
            "id": 14,
            "brend": "Michael Kors",
            "shopCotegory": "brends",
            "url": "https://www.michaelkors.com/",
            "img": "https://michaelkors.scene7.com/is/image/MichaelKors/MKJ8053-0710_1?$medium$",
            "title": "Precious Metal-Plated Brass Chain Link Bracelet",
            "price": "132$",
            "for": "women",
            "cotegory": "accessory",
            "URL": "https://www.michaelkors.com/precious-metal-plated-brass-chain-link-bracelet/MKJ8053.html"
        },
        {
            "id": 15,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/25301002_020_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Tailored Slim Pants",
            "price": "89$",
            "for": "men",
            "cotegory": "trousers",
            "URL": "https://www.calvinklein.us/en/men/apparel/bottoms/tailored-slim-pants/25301002-020.html?journey=Tier_0000024"
        },
        {
            "id": 16,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/35000340_015_main?wid=428&hei=569&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Monogram Logo Beanie",
            "price": "20$",
            "for": "men",
            "cotegory": "headdress",
            "URL": "https://www.calvinklein.us/en/men/accessories/hats/monogram-logo-beanie/35000340-015.html?journey=searchResultPage"
        },
        {
            "id": 17,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/82002004_032_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Men's Arnel Sneaker",
            "price": "60$",
            "for": "men",
            "cotegory": "shoes",
            "URL": "https://www.calvinklein.us/en/men/accessories/hats/monogram-logo-beanie/35000340-015.html?journey=searchResultPage"
        },
        {
            "id": 18,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/81301491_001_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Women's Carcie Dress Pump",
            "price": "72$",
            "for": "women",
            "cotegory": "shoes",
            "URL": "https://www.calvinklein.us/en/women/shoes/heels/womens-carcie-dress-pump/81301491-001.html?journey=Tier_0000023"
        },
        {
            "id": 19,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/14903752_241_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Short Puffer Jacket",
            "price": "113$",
            "for": "women",
            "cotegory": "jacket",
            "URL": "https://www.calvinklein.us/en/women/apparel/womens-outerwear/short-puffer-jacket/14903752-241.html?journey=Tier_0000021"
        },
        {
            "id": 20,
            "brend": "Calvin Klein",
            "shopCotegory": "brends",
            "url": "https://www.calvinklein.us/en",
            "img": "https://calvinklein.scene7.com/is/image/CalvinKlein/37400669_642_main?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "Elemental Chain Pouch",
            "price": "42$",
            "for": "women",
            "cotegory": "handbag",
            "URL": "https://www.calvinklein.us/en/women/accessories/bags/elemental-chain-pouch/37400669-642.html?journey=Tier_0000022"
        },
        {
            "id": 21,
            "brend": "Tommy Hilfiger",
            "shopCotegory": "brends",
            "url": "https://usa.tommy.com/en",
            "img": "https://shoptommy.scene7.com/is/image/ShopTommy/78J9503_FAP_FNT?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "EMBROIDERED TOMMY LOGO HOODIE",
            "price": "68$",
            "for": "men",
            "cotegory": "clothes",
            "URL": "https://usa.tommy.com/en/men/clothing/tops/embroidered-tommy-logo-hoodie/78J9503-FAP.html?journey=Tier_18482838"
        },
        {
            "id": 22,
            "brend": "Tommy Hilfiger",
            "shopCotegory": "brends",
            "url": "https://usa.tommy.com/en",
            "img": "https://shoptommy.scene7.com/is/image/ShopTommy/AM11812_PKB_FNT?wid=535&hei=705&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
            "title": "HILFIGER LOGO MINI MESSENGER",
            "price": "90$",
            "for": "men",
            "cotegory": "handbag",
            "URL": "https://usa.tommy.com/en/men/shoes-accessories/bags-wallets/hilfiger-logo-mini-messenger/AM11812-PKB.html?journey=Tier_18482838"
        }
    ]);
    const [filterCategory, setFilterCategory] = useState("all");

    const menProduct = items.filter(item => item.for === "men" && (filterCategory === "all" || item.cotegory === filterCategory));

    const uniqueCategories = Array.from(new Set(items.map(item => item.cotegory)));

    return (
        <div>
            <div className="itemsBlock">
                <div className="filter">
                    <div className="filterButton" onClick={() => setFilterCategory("all")}>All</div>
                    {uniqueCategories.map(category => (
                        <div className="filterButton" key={category} onClick={() => setFilterCategory(category)}>{category}</div>
                    ))}
                </div>

                <div className="front-items">
                    {menProduct.map(item => (
                        <MensItems key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
