import React from 'react';
import './Stand.scss';

export default function Stand() {
  return (
    <section>
      <picture>
        <source
          srcSet="src/assets/desktop/image-stand-out.jpg"
          media="(min-width: 500px)"
        />
        <img
          src="src/assets/mobile/image-stand-out.jpg"
          alt="imagem de uma taça"
        />
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
