import React, { useState } from "react";

import { App } from "../../content/types";

interface Props {
  apps: App[],
}

export function Grid({apps}: Props) {

  return founderGrid(apps);

  function founderGrid(founders: App[]) {
    return (
      <section>{founders.map((founder) => founderSquare(founder))}</section>
    );
  }

  function founderSquare(founder: App) {
    const { title, img, description, link } = founder
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
            borderRadius: '10%',
          }}
          alt={title}
          src={img}
        />
        <h2>{title}</h2>
        <p>{`${description.substring(0, 50)}...`}</p>
      </aside>
    );
  }
}