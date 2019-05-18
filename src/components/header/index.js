import React from "react";
import css from "./header.module.css";
import Link from "next/link";
import BurgerIcon from "../burger-icon";
const headerItems = ["Search", "Movies", "TV Shows"];
const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleBurgerIconClick = React.useCallback(() => {
    setShowMenu(showMenu => !showMenu);
  }, []);
  return (
    <div className={css.container}>
      <div className={css.subcontainer}>
        <h1 className={css.brand}>CinemaToday</h1>
        <div className={css.headerItems}>
          {headerItems.map((item, _index) => (
            <div key={_index} className={css.headerItem}>
              <Link href="/">
                <a>{item}</a>
              </Link>
            </div>
          ))}
        </div>
        <BurgerIcon onClick={handleBurgerIconClick} />
      </div>
      {showMenu ? (
        <div className={css.headerItemsSm}>
          {headerItems.map((item, _index) => (
            <div key={_index} className={css.headerItemSm}>
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
