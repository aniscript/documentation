import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="content-wrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
