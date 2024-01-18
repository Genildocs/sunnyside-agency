import React from 'react';
import './GraphicDesign.scss';

export default function GraphicDesign() {
  return (
    <section>
      <picture className="picture_graphic">
        <source
          srcSet="src/assets/desktop/image-graphic-design.jpg"
          media="(min-width: 500px)"
        />
        <img
          src="src/assets/mobile/image-graphic-design.jpg"
          alt="imagem de um ovo"
        />
      </picture>
      <div className="graphic_text">
        <h2>Graphic Design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
    </section>
  );
}
