import React from "react";
import "./header.css";
import Link from "next/link";
import BurgerIcon from "../burger-icon";
import { Container } from "reactstrap";
const headerItems = ["Search", "Movies", "TV Shows"];
const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleBurgerIconClick = React.useCallback(() => {
    setShowMenu(showMenu => !showMenu);
  }, []);
  return (
    <div className="header-container">
      <Container>
        <div className="subcontainer">
          <h1 className="brand">
            <Link href="/">
              <a>CinemaToday</a>
            </Link>
          </h1>
          <div className="headerItems">
            {headerItems.map((item, _index) => (
              <div key={_index} className="headerItem">
                {item}
              </div>
            ))}
          </div>
          <BurgerIcon onClick={handleBurgerIconClick} />
        </div>
      </Container>
      {showMenu ? (
        <div className="headerItemsSm">
          {headerItems.map((item, _index) => (
            <div key={_index} className="headerItemSm">
              <Link href="/">
                <a>{item}</a>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default Header;
