import React from "react";
import "./portfolio.css";

import IMG2 from "../../assets/izzy-fly1.png";
import IMG3 from "../../assets/izzy-fly2.png";
import IMG4 from "../../assets/izzy-fly3.png";
import IMG5 from "../../assets/izzy-fly4.png";

import IMG7 from "../../assets/fly5.jpg";
import IMG8 from "../../assets/fly6.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Our Training Programs</h5>
      <h2>Izzy Tech Academy</h2>
      <div className="portfolio__item-cta">
        <a href="https://docs.google.com/document/d/12Uy3phfiMbnELO2RRdO5zugoNqdzyM1kfit-oUJDzis/edit?usp=drivesdk" className="btn" target="_blank">
          Know More
        </a>
        <a href="/contact" className='btn'>Register</a>
      </div>
      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
