import React from "react";
import headerStyles from "../styles/header.css";
import hamburger from "../images/icon-mobile-menu.png";
import searchIcon from "../images/search-icon.png";
import profileIcon from "../images/profile-icon.png";

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    //console.log(this);
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.widthHelper}>
          <a
            className={`${headerStyles.hamburger} ${headerStyles.hamburger__link}`}
            onClick={this.handleHamburgerClick}
          >
            <img
              src={hamburger}
              className={`${headerStyles.hamburger} ${headerStyles.hamburger__image}`}/>
          </a>
          <span className={headerStyles.header__brand}>
            Brandoo
          </span>
          <div className={headerStyles.menuIcons}>
            <img
              src={searchIcon}
              className={`${headerStyles.menuIcons__image}`}
            />
            <span className={headerStyles.menuIcons__divider} />
            <img
              src={profileIcon}
              className={`${headerStyles.menuIcons__image}`}
            />
          </div>
        </div>
      </header>
    );
  }
}
