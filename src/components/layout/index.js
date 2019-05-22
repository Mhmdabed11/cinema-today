import React from "react";
import Header from "../header";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Alert } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
library.add(faStroopwafel);

const Layout = ({ children }) => {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          background-color: #1d1a19;
          color: #fff;
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
        pre {
          color: #fff;
        }
      `}</style>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
