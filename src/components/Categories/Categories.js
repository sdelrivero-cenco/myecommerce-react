import "./Categories.scss";

import {
  FaTabletAlt,
  FaHamburger,
  FaBeer,
  FaTshirt,
  FaGamepad,
  //   GiSofa,
  //   GiPresent,
} from "react-icons/fa";

import { TbSteeringWheel } from "react-icons/tb";
import { GiSofa, GiPresent } from "react-icons/gi";
export default function Categories() {
  return (
    <div className="categories-container">
      <div className="categories">
        <div className="categories__each">
          <div className="categories-logos">
            <FaTabletAlt />
          </div>
          <p> Electrónica</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <FaHamburger />
          </div>{" "}
          <p>Alimentos</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <FaBeer />
          </div>
          <p>Bebidas</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <FaTshirt />
          </div>
          <p>Indumentaria</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <FaGamepad />
          </div>
          <p>Juegos</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <TbSteeringWheel />
          </div>
          <p>Automotor</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <GiSofa />
          </div>
          <p>Hogar</p>
        </div>
        <div className="categories__each">
          <div className="categories-logos">
            <GiPresent />
          </div>
          <p>Otros</p>
        </div>
      </div>
    </div>
  );
}
