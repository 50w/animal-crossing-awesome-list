import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Grid, Founder } from "./components";
import { App as AppType } from "./content/types";
import { getApps } from "./content/adapter";

import "./App.css";
import "./mvp.css";

function App() {
  const apps = getApps();


  return (
    <div>
       <header>
        <nav>
          <h1>Animal Crossing Awesome List</h1>
          <ul>
            <li>
              <a
                href="https://www.github.com/50w/animal-crossing-nh-awesome-list"
                target="_blank"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
            <section>
              <aside style={{ width: "auto" }}>
                <h2>What is Founder Shelfspace?</h2>
                <div style={{ flexDirection: "row" }}>
                  <img height={100} src="reading.svg" />
                  <p>
                    What does the bookshelf of the worlds most successful
                    founders, entrepreneurs, and investors look like? Get
                    context on how they think and browse the growing library of
                    books they recommend.
                  </p>
                </div>
              </aside>
            </section>
            <hr />
      </header>
      {/* <Founder founder={selected} unselect={() => select(undefined)} /> */}

     <section><h1>View more recommendations:</h1></section>
        {/* <Grid
          founders={founders}
          selectFounder={(founder: Person) => select(founder)}
        /> */}
      <section style={{ padding: "2rem" }}>
        {renderContributors()}
      </section>
    </div>
  );

  function renderContributors() {
    const contributors = [
      { name: "Nick", url: "https://www.github.com/nicklewanowicz" },
      { name: "50w", url: "https://www.github.com/50w" },
    ];
    return (
      <p>
        Made with ❤️ by
        {contributors.map(({ name, url }, i) => {
          const delimiter =
            i === 0 ? " " : i < contributors.length - 1 ? ", " : ", and ";
          return (
            <span key={name}>
              {delimiter}
              <a target="_blank" href={url}>
                {name}
              </a>
            </span>
          );
        })}
      </p>
    );
  }
}

export default App;
