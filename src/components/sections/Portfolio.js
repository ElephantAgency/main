import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Our Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/AltoVita.jpg"
              alt="AltoVita"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>AltoVita</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Industry :
                  </span>
                  <span>Hospitality</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> About :
                  </span>
                  <span>Find corporate accommodations worldwide.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforms :
                  </span>
                  <span>Web</span>
                </li>
              </ul>
            </div>
            <a href="https://www.altovita.com/" target="_blank" className="custom-btn">
              <span>
                Website <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/TaxDown.jpg"
              alt="TaxDown"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>TaxDown</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Industry :
                  </span>
                  <span>Accounting</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> About :
                  </span>
                  <span>Easy tax filing with live expert integration.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforms :
                  </span>
                  <span>Web, Android, iOS</span>
                </li>
              </ul>
            </div>
            <a href="https://taxdown.es/" target="_blank" className="custom-btn">
              <span>
                Website <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/MyVerisure.jpg"
              alt="My Verisure"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>My Verisure</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Industry :
                  </span>
                  <span>Home Security</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> About :
                  </span>
                  <span>Control your Verisure home security devices.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforms :
                  </span>
                  <span>Android, iOS</span>
                </li>
              </ul>
            </div>
            <a href="https://www.securitasdirect.es/servicios/myverisure" target="_blank" className="custom-btn">
              <span>
                Website <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/Sweep.jpg"
              alt="Sweep App"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Sweep Ireland</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Industry :
                  </span>
                  <span>Retail / Automobiles</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> About :
                  </span>
                  <span>Connecting buyers with car sales across Ireland</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Platforms :
                  </span>
                  <span>Android, iOS</span>
                </li>
              </ul>
            </div>
            <a href="https://www.sweep.ie/" target="_blank" className="custom-btn">
              <span>
                Website <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}


        {/* Removing the iframe below breaks the site, not sure why */}
        {/* PORTFOLIO ITEM STARTS */}
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/AqcjdkPMPJA?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
        {/* PORTFOLIO ITEM ENDS */}
        
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
