import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [search, setSearch] = React.useState('');
  const [foodCAT, setFoodCAT] = React.useState([]);
  const [foodItem, setFoodItem] = React.useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3001/api/fooddata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCAT(response[1]);
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "cover" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: 10 }}>
              <div className="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </div>
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
      </div>
      <div className='container'>
        {foodCAT.length !== 0
          ? foodCAT.map((data) => (
            <div key={data._id} className="mb-4">
              <div className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              <div className="row g-4 mb-4">
                {foodItem.length !== 0
                  ? foodItem
                    .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((filteredItem) => (
                      <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                          foodItem={filteredItem}
                          foodname={filteredItem.name}
                          options={filteredItem.options[0]}
                          imgSrc={filteredItem.img}
                        />
                      </div>
                    ))
                  : <div>No Such Data Found</div>
                }
              </div>
            </div>
          ))
          : " "
        }
      </div>
      <div><Footer /></div>
    </div >
  );
}
