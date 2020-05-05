import React, { useState } from "react";

import { App } from "../../content/types";

interface Props {
  founder: App;
  unselect(): void;
}

export function Founder({
  founder: { title, link, img, description },
  unselect, 
}: Props) {
  return (
    <main>
      <aside style={{ width: "100%" }}>
        <nav>
          <img
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "10%",
            }}
            alt={name}
            src={img}
          />
          <button onClick={unselect}>x</button>
        </nav>
        <h2>{title}</h2>
        <p>{`${description}`}</p>
      </aside>
      <hr/>

      <h1>Recommends:</h1>
      <section>
        <hr />
      </section>
    </main>
  );
}
