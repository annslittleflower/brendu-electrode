
import React from "react";
import "../styles/normalize.css";
import "../styles/raleway.css";
// import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";
// import electrodePng from "../images/electrode.png";
// import DemoStates from "./demo-states";
// import DemoPureStates from "./demo-pure-states";
// import { DemoButtons } from "./demo-buttons";
import Header from "./header";
import Card from "./card";
import HeaderSubMenu from "./header-submenu";
import CardsWrapper from "./cardsWrapper";
/**/

export default () =>
  (
    <div className={custom.container}>
      <Header />
      <HeaderSubMenu />
      <CardsWrapper>
        <Card imageUrl="https://photo.e-migration.ru/wp-content/uploads/2016/08/priroda-new-zeland-4.jpg"/>
        <Card imageUrl="https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?auto=compress&cs=tinysrgb&h=350"/>
        <Card imageUrl="http://www.gogetnews.info/uploads/posts/2017-11/1511547539_priroda.jpg"/>
        <Card imageUrl="https://i.ytimg.com/vi/iqdRh9IpJ6I/maxresdefault.jpg"/>
        <Card imageUrl="http://dreempics.com/uploads/posts/2016-06/1464863604_1.jpeg"/>

      </CardsWrapper>
    </div>
);
