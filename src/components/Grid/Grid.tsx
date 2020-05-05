import React, { useState } from "react";

import { App } from "../../content/types";

interface Props {
  apps: App[];
}

export function Grid({ apps }: Props) {
  return appGrid(apps);

  function appGrid(founders: App[]) {
    return <section>{founders.map((app) => appSquare(app))}</section>;
  }

  function appSquare(app: App) {
    const { title, img, description, link } = app;
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <aside key={title}>
          <img
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "10%",
            }}
            alt={title}
            src={img}
          />
          <a href={link} target="_blank">
            <h2>{title}↗</h2>
          </a>

          <p>{description}</p>
        </aside>
    );
  }
}
