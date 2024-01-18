import React from 'react';
import './Transform.scss';

export default function Transform() {
  return (
    <section>
      <picture>
        <source
          srcSet="src/assets/desktop/image-transform.jpg"
          media="(min-width: 500px)"
        />
        <img
          src="src/assets/mobile/image-transform.jpg"
          alt="imagem de um ovo"
        />
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
