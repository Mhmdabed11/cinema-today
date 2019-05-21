import React from "react";
import Header from "../header";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Alert } from "reactstrap";
const Layout = ({ children }) => {
  return (
    <div>
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
        * {
          box-sizing: border-box;
        }

        .slick-next {
          position: absolute !important;
          right: 0;
          bottom: -10px;
          height: 100%;
          width: 30px;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .slick-next:hover {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
        .slick-previous {
          position: absolute !important;
          left: 0;
          bottom: -10px;
          height: 100%;
          width: 30px;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .slick-previous:hover {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
