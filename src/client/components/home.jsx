
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
/**/

export default () =>
  (<div className={custom.container}>
    <Header />

    {/*

    <section className={custom.header}>
      <h2 className={skeleton.title}>
        Hello from {" "}
        <a href="https://github.com/electrode-io">{"Electrode"} <img src={electrodePng} /></a>
      </h2>
    </section>

    <div className={custom["docs-section"]}>
      <DemoStates />
    </div>

    <div className={custom["docs-section"]}>
      <DemoPureStates />
    </div>

    <div className={custom["docs-section"]}>
      <DemoButtons />
    </div>
    */}
  </div>);
