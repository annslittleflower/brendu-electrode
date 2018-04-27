import React from "react";
import headerStyles from "../styles/header.css";


export default class HeaderSubMenu extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e) {
    this.setState({
      activeLink: e.currentTarget.dataset.linkname
    });
  }

  render() {
    return (
      <nav className={headerStyles.submenu}>
        <a
          className={`${headerStyles.submenu__link}
            ${this.state.activeLink === "brands" ? headerStyles.submenu__link_active : "" }
          ` }
          onClick={this.handleLinkClick}
          data-linkname="brands"
        >
          brands
        </a>
        /
        <a
          className={`${headerStyles.submenu__link}
            ${this.state.activeLink === "community" ? headerStyles.submenu__link_active : "" }
          ` }
          onClick={this.handleLinkClick}
          data-linkname="community"
        >
          community
        </a>
      </nav>
    );
  }
}
