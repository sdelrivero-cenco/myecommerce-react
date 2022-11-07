import "./Footer.scss";
import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import ig from "../../assets/img/instagram.svg";
import yb from "../../assets/img/youtube.svg";
import ap from "../../assets/img/apple.svg";
import gp from "../../assets/img/google-play.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaTwitter } from "@fortawesome/free-solid-svg-icons";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaAppStore,
  FaGooglePay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <p>
          MiEcommerce por Santiago del Rivero. Todos los derechos reservados
        </p>
      </div>
      <div className="footer-logos">
        <div className="logo">
          <FaTwitter />
        </div>
        <div className="logo">
          <FaFacebook />
        </div>
        <div className="logo">
          <FaInstagram />
        </div>
        <div className="logo">
          <FaYoutube />
        </div>
        <div className="logo">
          <FaAppStore />
        </div>
        <div className="logo">
          <FaGooglePay />
        </div>
      </div>
    </div>
  );
}
