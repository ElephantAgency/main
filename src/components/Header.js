const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">About</span>
              </li>
              <li>
                <span id="portfolio-link">Portfolio</span>
              </li>
              <li>
                <span id="contact-link">Contact</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            <span> ElephantAgency</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home" onClick={() => {document.getElementById("checkboxmenu").checked = false;}}>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo" onClick={() => {document.getElementById("checkboxmenu").checked = false;}}>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => {document.getElementById("checkboxmenu").checked = false;}}>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => {document.getElementById("checkboxmenu").checked = false;}}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
