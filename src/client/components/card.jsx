import React from "react";
import cardStyles from "../styles/card.css";

export default class Card extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};


  }

  render() {
    return (
      <div className={cardStyles.card}>
        <img
          className={cardStyles.card__image}
          // src="https://i.ytimg.com/vi/X8Z8okhkjv8/hqdefault.jpg"
          src={this.props.imageUrl}

        />

      </div>
    );
  }
}
