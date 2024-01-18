import React from 'react';
import './Photography.scss';

export default function Photography() {
  return (
    <section>
      <picture className="picture_photography">
        <source
          srcSet="./assets/desktop/image-photography.jpg"
          media="(min-width: 500px)"
        />
        <img
          src="./assets/mobile/image-photography.jpg"
          alt="imagem de um ovo"
        />
      </picture>
      <div className="photography_text">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
}
