import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Bdor Ceramic Vase, Flower Vase Set of 3, Hollow Round Matte Vase for Room Decor, Modern Farmhouse Home DéCor Accents, Living Room Decor, Book Shelf, Mantel and Minimalism Dining Coffee Table Decor."
            price={25.97}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61r3O4g9AML._AC_SY450_.jpg"
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Dough Hook and Whisk, 5 Litre Glass BowlAIFEEL Immersion Hand Blender, 4-in-1 Stick Blenderice blade, 600ml Container,Milk Frother ,Puree Infant Food, Smoothies"
            price={29.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71Jg1MewpdL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title=" Govee Envisual TV LED Backlight with Camera, RGBIC Wi-Fi TV Backlights for 55-65 inch TVs, Works with Alexa & Google Assistant, App Control, Music Sync Lights, H6199"
            price={79.99}
            rating={3}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71RRSDyVgEL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="The Everyday Hero Manifesto: Activate Your Positivity, Maximize Your Productivity, Serve The World"
            price={11.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81zuNNIUhRL._SY425_.jpg"
          />
          <Product
            id="3254354345"
            title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"
            price={1049.0}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81xW62KXNhL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title=" AMERLIFE 2 Piece Sofa Set, Loveseat Set- Oversize Sofa Couch for Living Room- Bouclé Deep Seat Sofa, White"
            price={899.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nkpRe6cPL._AC_SX450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
