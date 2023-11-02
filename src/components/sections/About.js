const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div id="my-photo" className="info flex-column-mobile">
        {/* INFO STARTS */}
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                ElephantAgency
              </span>
            </span>
            <div className="logos">
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
              <i class="devicon-chrome-plain"></i>
              </span>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
              <i class="devicon-react-plain"></i>
              </span>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
              <i class="devicon-android-plain"></i>
              </span>
            </div>
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
              <i class="devicon-apple-original"></i>
              </span>
            </div>    
          </div>     
            <span className="animated-layer fade-in-up-animation fadeInUp wow">
                We are an app development agency with an extensive network of experienced developers.
            </span>
            </h2>
            {/* <h3>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
              We work with our clients to find the right solution for each idea.
              </span>
            </span>
            </h3> */}
        {/* INFO ENDS */}
        
      </div>
      {/* INFO HOLDER ENDS */}
      
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
