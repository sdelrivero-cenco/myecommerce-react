import "./Combos.scss";
import disney from "../../assets/img/disneybrand.png";
import hbo from "../../assets/img/hbobrand.png";
export default function Combos() {
  return (
    <div className="combos-container">
      <div className="combos">
        <div className="combos__each combo-1">
          <div className="shadow"></div>
          <div className="combo-img">
            <img src={disney} />
          </div>
          <div className="combo-text">
            <h2 className="combo-text__title"> 50% OFF en Combo Plus</h2>
            <p> Canjeando 50.000 puntos MiEcommerce</p>
          </div>
        </div>
        <div className="combos__each combo-2">
          <div className="shadow"></div>
          <div className="combo-img">
            <img src={hbo} />
          </div>
          <div className="combo-text">
            <h2 className="combo-text__title"> 50% OFF en Combo Plus</h2>
            <p> Canjeando 50.000 puntos MiEcommerce</p>
          </div>
        </div>
      </div>
    </div>
  );
}
