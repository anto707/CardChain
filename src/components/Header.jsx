
  const Header = ({ variation, onSelectSection }) => {
    const handleSelect = (section) => {
      if (onSelectSection) {
        onSelectSection(section);
      }
    };
  
    return (
      <header>
        <nav
          id="navbar"
          className={`navbar navbar-expand-md ${
            variation ? "navbar-dark bg-dark" : ""
          }`}
        >
          <div className="container-fluid">
            {variation === true && (
              <a className="navbar-brand">
                <img
                  className="mx-auto d-block"
                  src="src/assets/imgs/logo3.png"
                  alt="logo"
                ></img>
              </a>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {variation === true && (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link text-white clickable"
                        onClick={() => handleSelect("sectionDeck")}
                      >
                        Your Deck
                      </a>
                    </li>
  
                    <li className="nav-item">
                      <a
                        className="nav-link text-white clickable"
                        onClick={() => handleSelect("sectionMarket")}
                      >
                        Market Place
                      </a>
                    </li>
                  </>
                )}
                {variation === false && (
                  <>
                    <li className="nav-item">
                      <a
                        id="gamelink"
                        className="nav-link text-white"
                        href="#game"
                      >
                        The Game
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#about">
                        About Us
                      </a>
                    </li>
                  </>
                )}
              </ul>
              {variation === true && (
                <div className=" ">
                  <button id="playBtn" className="btn btn-light">
                    Play Game
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  };
  export default Header;
  