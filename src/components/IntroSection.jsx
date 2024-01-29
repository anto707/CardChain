
  
  const IntroSection = ({ onStartBtnClick }) => {
    return (
      <>
        <div className="text-center">
          <img
            id="logo"
            className="pt-5 pb-md-5"
            src="src/assets/imgs/logo3.png"
            alt="logo"
          ></img>
          <div id="intro" className="pt-4">
            THE NEW CARD GAME
          </div>
  
          <div id="play-btn-container" className="text-center pt-3">
            <button
              id="playButton"
              type="button"
              className="btn btn-outline-light btn-lg"
              onClick={onStartBtnClick}
            >
              Start
            </button>
          </div>
        </div>
  
        <div id="battlefield-container" className="parent text-center">
          <img
            id="battlefield"
            className="img-fluid mx-auto d-block pt-5"
            width="100%"
            src="src/assets/imgs/battlefield.png"
          ></img>
          <img
            id="pg1"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/517.png"
          ></img>
          <img
            id="pg2"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/282.png"
          ></img>
          <img
            id="pg3"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/251.png"
          ></img>
          <img
            id="pg4"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/196.png"
          ></img>
          <img
            id="pg5"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/501.png"
          ></img>
          <img
            id="pg6"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/006.png"
          ></img>
          <img
            id="pg7"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/245.png"
          ></img>
          <img
            id="pg8"
            className="character img-fluid mx-auto d-block"
            src="src/assets/placeholder/038.png"
          ></img>
        </div>
      </>
    );
  };
  export default IntroSection;
  