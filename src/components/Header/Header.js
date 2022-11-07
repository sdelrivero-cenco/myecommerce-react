import "./Header.scss";
import logo from "../../assets/img/MiEcommerce.svg";
import { HiShoppingCart } from "react-icons/hi";
export default function Header({ type }) {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} />
      </div>
      {type === "form" ? null : (
        <>
          <div className="header__searchbar">
            <input></input>
          </div>
          <div className="header__cart">
            <HiShoppingCart />
          </div>
          <div className="header__user-config"></div>
        </>
      )}
    </div>
  );
}
