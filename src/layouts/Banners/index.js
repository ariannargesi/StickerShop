import React from "react"
import virgoolLogo from "../../assets/virgool.png";
import pythonLogo from "../../assets/python.png";
import movieLogo from "../../assets/giant_yellow_head.png";
import dribbleLogo from "../../assets/flerbo_2.5Dribbble.png";
import gameLogo from "../../assets/flerbo_2.5God-of-War-2.png";

const Banners = () =>
    (
        <div className={"banners-index"}>
    <div style={{width: "300px", height: "710px", background: "#dae0fb", marginTop: "10px", display: "flex", flexDirection: "column",textAlign: "center", justifyContent: "center"}}>
        <h3 className="banner-description">most special stickers</h3>
        <h2 className="banner-title">Websites</h2>
        <div>
            <img className="banner-image" src={virgoolLogo} alt=""/>
        </div>
        <button>view and buy</button>
    </div>
    <div style={{width:"900px", height: "700px", display: "flex", flexWrap: "wrap"}}>
        <div style={{width: "540px", height: "350px", background: "#f4f4f4", display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <h3 className="banner-description">laptop sticker</h3>
                <h2>For developers</h2>
                <button className="banner-button">View and Buy</button>
            </div>
            <div style={{textAlign: "center"}}>
                <img className="banner-image" src={pythonLogo} alt=""/>
            </div>
        </div>
        <div style={{width: "300px", height: "350px", background: "#f6dfd0", display: "inline-flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{textAlign: "center"}}>
                <img src={movieLogo} alt="" className="banner-image"/>
            </div>
            <h3 className="banner-description">Special Stickers</h3>
            <h2 className="banner-title">Movie and Series</h2>
        </div>
        <div style={{width: "300px", height: "350px", background: "#f6d0d7", display: "inline-flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{textAlign: "center"}}>
                <img src={dribbleLogo} alt="" className="banner-image"/>
            </div>
            <h3 className="banner-description">Laptop sticker</h3>
            <h2 className="banner-title">For Designers</h2>
        </div>
        <div style={{width: "540px", height: "350px", background: "#d8e2ea", display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <h3 className="banner-description">For gamers</h3>
                <h2>Gamers essential</h2>
                <button className="banner-button">View and Buy</button>
            </div>
            <div style={{textAlign: "center"}}>
                <img className="banner-image" src={gameLogo} alt=""/>
            </div>
        </div>
    </div>
</div>
)
export default Banners