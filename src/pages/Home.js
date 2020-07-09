import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import Title from '../components/Title/Title'
import Banners from '../layouts/Banners'
import Slider from '../layouts/Slider'
import Benefits from '../layouts/Benefits'
import hexagonStickerImage from '../assets/Hexagon-stickers.png'
import creditCardStickerImage from '../assets/credit-card-sticker.png'
import virgoolLogo from '../assets/virgool.png'
import pythonLogo from '../assets/python.png'
import movieLogo from '../assets/giant_yellow_head.png'
import dribbleLogo from '../assets/flerbo_2.5Dribbble.png'
import gameLogo from '../assets/flerbo_2.5God-of-War-2.png'
import Pagination from '../layouts/Pagination/Pagination'
import ProductsRow from '../components/ProductsRow/ProductsRow'
import InstagramGride from '../layouts/InstagramGride/InstagramGride'

export default () => (
    <div>
        <Header/>
        <Carousel/>
        <Title
            content={"Newst Products"}
            size={"large"}
        />
        <div style={{height: "750px"}}>
          <ProductsRow num="8"/>
        </div>
        <Title
            content={"About Flerbo Stickers"}
            size={"large"}
        />
        <div className={"about-us-index"}>
            <p>
                These days, we all consider our laptops and desktops to be among our most private personal items! Nothing but keeping our Devices clean and beautiful shows our character to others. That's why so many people stick stickers on the back of their laptops, desktop cases, or even their mobile phones. Aside from making it more beautiful, stickers convey the kind of thinking or work we do to others without words</p>
            <p>Florbo prints the laptop sticker himself and cuts with the machine. These stickers are made of vinyl, which is different from other stickers on the market: the fluorine is more durable, has more adhesion and its color does not fade! You can buy directly from the list of Florbo stickers, to which new designs are added every day, and have them delivered to your door. In addition, we have special plans for ordering stickers for events and companies, so be sure to contact us!</p>
        </div>
        <div className={"Hexagon-sticker-index"}>
            <div>
                <img src={hexagonStickerImage} alt=""/>
            </div>
            <div>
                <h2>hexagon Stickers</h2>
                <p>If you love stickers like us, but the unmatched size and shape of your Flaro laptop stickers will cause your OCD to recur, hexagonal stickers will be made for you! You can attach hexagonal stickers to your laptop like Beehive.</p>
                <button>View and buy</button>
            </div>
        </div>
        <div className={"Hexagon-sticker-index"}>
            <div>
                <h2>Credit card stickers</h2>
                <p>Like us, you may be tired of the simple and ugly appearance of your credit cards. Credit card sticker made for you! You can stick the card sticker on the front and back of bank cards or other cards you have. You can even order any posts you want from us so that we can print cards on this sticker for you!</p>
                <button>view and buy</button>
            </div>
            <div>
                <img src={creditCardStickerImage} alt=""/>
            </div>
        </div>
        <Banners/>
        <Title
            content={"Most Sell Product"}
            size={"large"}
        />
        <Slider/>
        <Benefits/>
        <Footer/>
    </div>
)

