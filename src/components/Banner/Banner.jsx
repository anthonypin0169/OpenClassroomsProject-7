import React from "react"
import "./Banner.css"
import bannerImg from "../../img/BannerImg.png"

function Banner() {

    return (
        <div className="banner"
        style={{backgroundImage : `url(${bannerImg})`}}>
            <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner