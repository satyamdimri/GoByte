import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover"}}>
            <div className="carousel-inner" id="carousel">
                <div className="carousel-caption" style={{zIndex:10}}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img
                        src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS.jpg"
                        className="d-block w-100"
                        alt="burger"
                        style={{ filter: 'brightness(30%)' }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://www.dominos.com.au/ManagedAssets/AU/product/P416/AU_P416_en_hero_7855.jpg?v-1310925266"
                        className="d-block w-100"
                        alt="pizza"
                        style={{ filter: 'brightness(30%)' }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://www.indianveggiedelight.com/wp-content/uploads/2023/01/white-sauce-pasta.jpg"
                        className="d-block w-100"
                        alt="pasta"
                        style={{ filter: 'brightness(30%)' }}
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
