import { Icon } from "@iconify-icon/react";

function MarketPlace() {
  return (
    <section>
      <h2 className="text-center pt-5"> Cards </h2>
      <div className="card-deck d-flex flex-wrap justify-content-center pt-2">
        <div className="card border-5">
          <img
            className="card-img-top"
            src="src/assets/placeholder/charizard.png"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">Charizard</h5>
            <p className="card-text"> 40 &euro;</p>
            <a href="#" className="btn btn-outline-light">
              <Icon icon="material-symbols:shopping-cart" />
            </a>
          </div>
        </div>

        <div className="card border-5">
          <img
            className="card-img-top"
            src="src/assets/placeholder/espeon.png"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">Espeon</h5>
            <p className="card-text"> 40 &euro;</p>
            <a href="#" className="btn btn-outline-light">
              <Icon icon="material-symbols:shopping-cart" />
            </a>
          </div>
        </div>

        <div className="card border-5">
          <img
            className="card-img-top"
            src="src/assets/placeholder/munna.png"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">Munna</h5>
            <p className="card-text"> 30 &euro;</p>
            <a href="#" className="btn btn-outline-light">
              <Icon icon="material-symbols:shopping-cart" />
            </a>
          </div>
        </div>

        <div className="card border-5">
          <img
            className="card-img-top"
            src="src/assets/placeholder/oshawott.png"
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">Oshawott</h5>
            <p className="card-text"> 30 &euro;</p>
            <a href="#" className="btn btn-outline-light">
              <Icon icon="material-symbols:shopping-cart" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MarketPlace;
