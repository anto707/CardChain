function GameSect() {
    return (
      <div
        className="contenitore container-fluid text-center pt-5 pb-3"
        id="game"
      >
        <div className="game-container pt-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src="src/assets/imgs/frame1.png" className="img-fluid"></img>
            </div>
  
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="p-4 text-white">
                <p>Your text goes here.</p>
                <p>You can add more paragraphs or other content as needed.</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="game-container pt-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="p-4 text-white">
                <p>Your text goes here.</p>
                <p>You can add more paragraphs or other content as needed.</p>
              </div>
            </div>
  
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="p-4">
                <img src="src/assets/imgs/frame2.png" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
  
        <div className="game-container pt-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src="src/assets/imgs/frame3.png" className="img-fluid"></img>
            </div>
  
            <div className="col-md-6 d-flex align-items-center justify-content-center text-white">
              <div className="p-4">
                <p>Your text goes here.</p>
                <p>You can add more paragraphs or other content as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default GameSect;
  