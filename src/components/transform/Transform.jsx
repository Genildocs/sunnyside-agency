import React from "react";
import "./Transform.scss";
import Eagle from "../../assets/mobile/image-transform.jpg";
import EagleDesktop from "../../assets/desktop/image-transform.jpg";
export default function Transform() {
  return (
    <section>
      <picture>
        <source srcSet={EagleDesktop} media="(min-width: 500px)" />
        <img src={Eagle} alt="imagem de um ovo" />
      </picture>
      <div className="transform_text">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="#">Learn more</a>
      </div>
    </section>
  );
}
