import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Grid } from "./components";
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
                href="https://forms.gle/Sm5WUZP75rsQwv8z5"
                target="_blank"
              >
                Add item!↗
              </a>
            </li>
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
            <h2>What is this Awesome List?</h2>
            <div style={{ flexDirection: "row" }}>
              <img height={100} src="appreciation.svg" />
              <p>
                I think the suite of apps and services the Animal Crossing
                community has created are fantastic and deserve more visibility.
                This website exists to spotlight all the fantastic things people
                have made for the Animal Crossing community!
              </p>
            </div>
          </aside>
        </section>
        <hr />
      </header>
      <Grid apps={apps} />
      <section style={{ padding: "2rem" }}>{renderContributors()}</section>
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
