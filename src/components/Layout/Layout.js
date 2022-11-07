import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Layout.scss";

export default function Layout({ children, type }) {
  return (
    <>
      <Header type={type} />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
}
