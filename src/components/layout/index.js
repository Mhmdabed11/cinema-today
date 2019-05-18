import React from "react";
import Header from "../header";
import css from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          background-color: #000;
        }
        html {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
