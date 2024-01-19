import React from "react";
import "./Stand.scss";
import Cup from "../../assets/mobile/image-stand-out.jpg";
import CupDesktop from "../../assets/desktop/image-stand-out.jpg";

export default function Stand() {
  return (
    <section className="section_stand">
      <picture>
        <source srcSet={CupDesktop} media="(min-width: 500px)" />
        <img src={Cup} alt="image cup" />
      </picture>
      <div className="stand_text">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a href="#">Learn more</a>
      </div>
    </section>
  );
}
