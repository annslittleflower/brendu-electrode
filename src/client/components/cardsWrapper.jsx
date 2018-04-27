import React from "react";
import cardStyles from "../styles/card.css";

export default function CardsWrapper ({ children }) {
  return (
    <div className={cardStyles.centerer}>
      <div className={cardStyles.wrapper}>
        {children}
      </div>
    </div>
  );
}
