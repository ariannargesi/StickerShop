import React from 'react'
import Button from "../../components/Button"
import './InstagramImages.scss'
import {Link} from "react-router-dom";

const Instagram = () => {
    return (
        <>
        <div className="svg-container">
            <div style={{width: "1200px", margin: "0 auto"}}>
                <Button size={"medium"} width={"300px"}  type={"white"}> <Link to="/">Fallow us on instagram</Link></Button>
            </div>
        </div>
        <div className="instagram-wrapper">
        <a href="https://www.instagram.com/ariannargesi">
        <div className="instagram-images">

            <div style={{display: "flex", flexDirection: "row"}}>
                <div className="instagram-images-small">
                    <img src="https://instagram.fgbb2-1.fna.fbcdn.net/v/t51.2885-15/e35/97021643_158073915697606_4722173138011095237_n.jpg?_nc_ht=instagram.fgbb2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=lbzL1c5LYwgAX9oImJJ&oh=c2df5167c7fee95d8ba3f2d4e9864d06&oe=5F3C41CA" alt="" style={{borderTopLeftRadius: "5px"}}/>
                    <img src="https://instagram.fgbb2-2.fna.fbcdn.net/v/t51.2885-15/e35/96812544_172215920794889_5912835995810383731_n.jpg?_nc_ht=instagram.fgbb2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=c0P7NgHNDnoAX-tIkBx&oh=273f719c6aac50a064ceb4d5489ceefb&oe=5F3EDB01" alt=""/>

                </div>
                <div className="instagram-images-large">
                    <img src="https://instagram.fgbb2-1.fna.fbcdn.net/v/t51.2885-15/e35/97354418_560203038245095_9026967827994545350_n.jpg?_nc_ht=instagram.fgbb2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=dO8Vlv1m7AcAX-wRznL&oh=4a9ed227da121d3ab85b1f04b25dadd1&oe=5F3C7D99"/>
                </div>
                <div className="instagram-images-small">
                    <img src="https://instagram.fgbb2-2.fna.fbcdn.net/v/t51.2885-15/e35/95698555_121502746202509_1151735437736984947_n.jpg?_nc_ht=instagram.fgbb2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=KnopaLfsIZoAX97IF6N&oh=f2767f7fdcb299954b5ca209401ddb1d&oe=5F3C7FB9" alt=""/>
                    <img src="https://instagram.fgbb2-2.fna.fbcdn.net/v/t51.2885-15/e35/95476322_650263889036440_3169501880700460705_n.jpg?_nc_ht=instagram.fgbb2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=XtSRiLvUKzYAX955EsU&oh=26c9e48babd6d7431c1cdd6c538163e9&oe=5F3C3CCD" alt=""/>
                </div>
                <div className="instagram-images-small">
                    <img src="https://instagram.fgbb2-2.fna.fbcdn.net/v/t51.2885-15/e35/79492097_2433485413444333_513374062746023786_n.jpg?_nc_ht=instagram.fgbb2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=16bANfaZEjcAX_wthzk&oh=2de5d5750dc16ffbfb1b5976c332aeea&oe=5F3EC4F6" alt="" style={{borderTopRightRadius: "5px"}}/>
                    <img src="https://instagram.fgbb2-1.fna.fbcdn.net/v/t51.2885-15/e35/69646398_585829925486864_5866021439146762222_n.jpg?_nc_ht=instagram.fgbb2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ZSkq22OBnLQAX_hHHGs&oh=93cf6e9ef129efa491b2c25e828246b8&oe=5F3E38AC" alt="" style={{borderBottomRightRadius: "5px"}}/>
                </div>
            </div>
        </div>
        </a>
        </div>
        </>
    )
}
export default Instagram