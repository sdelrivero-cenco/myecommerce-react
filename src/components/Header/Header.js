import "./Header.scss";
import logo from "../../assets/img/MiEcommerce.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} />
      </div>
    </div>
  );
}
