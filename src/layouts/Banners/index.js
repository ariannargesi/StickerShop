import React from "react";
import virgoolLogo from "../../assets/virgool.png";
import pythonLogo from "../../assets/python.png";
import movieLogo from "../../assets/giant_yellow_head.png";
import dribbleLogo from "../../assets/flerbo_2.5Dribbble.png";
import gameLogo from "../../assets/flerbo_2.5God-of-War-2.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Banners = () => (
    <div className="banners-wrapper"  >
    <div className={"banners-index"}>
        <Link to={"/Websites"}>
            <div
                className={"banner-item"}
                style={{
                    width: "300px",
                    height: "710px",
                    background: "#dae0fb",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <h3 className="banner-description"> Special Items</h3>
                <h2 className="banner-title">Websites</h2>
                <div>
                    <img className="banner-image" src={virgoolLogo} alt="" />
                </div>
                <div>
                    <Button size={"medium"} type={"white"}>
                        View And Buy
                    </Button>
                </div>
            </div>
        </Link>
        <div
            className={"VQ4-gs-main"}
            style={{
                width: "900px",
                height: "700px",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <Link to={"/Developers"}>
                <div
                    className="banner-item"
                    style={{
                        width: "540px",
                        height: "350px",
                        background: "#f4f4f4",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <h3 className="banner-description">Laptop Sticker</h3>
                        <h2>For Developers</h2>
                        <Button size={"medium"} type={"white"}>
                            {" "}
                            <Link to="/">View And Buy</Link>
                        </Button>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img className="banner-image" src={pythonLogo} alt="" />
                    </div>
                </div>
            </Link>

            <Link to={"/Movies"}>
                <div
                    className="banner-item"
                    style={{
                        width: "300px",
                        height: "350px",
                        background: "#f6dfd0",
                        display: "inline-flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <img src={movieLogo} alt="" className="banner-image" />
                    </div>
                    <h3 className="banner-description">Special Stickers</h3>
                    <h2 className="banner-title">Movie and Series</h2>
                </div>
            </Link>

            <Link to={"/Designers"}>
                <div
                    className="banner-item"
                    style={{
                        width: "300px",
                        height: "350px",
                        background: "#f6d0d7",
                        display: "inline-flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <img src={dribbleLogo} alt="" className="banner-image" />
                    </div>
                    <h3 className="banner-description">Laptop Sticker</h3>
                    <h2 className="banner-title">For Designers</h2>
                </div>
            </Link>

            <Link to={"/Games"}>
                <div
                    className="banner-item"
                    style={{
                        width: "540px",
                        height: "350px",
                        background: "#d8e2ea",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <h3 className="banner-description">For gamers</h3>
                        <h2>Gamers Essential</h2>
                        <Button size={"medium"} type={"white"}>
                            {" "}
                            <Link to="/">View And Buy</Link>
                        </Button>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <img className="banner-image" src={gameLogo} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    </div>
    </div>
);
export default Banners;
