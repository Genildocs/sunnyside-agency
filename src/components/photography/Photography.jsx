/* eslint-disable no-unused-vars */
import React from 'react';
import './Photography.scss';
import Orange from '../../assets/mobile/image-photography.jpg';
import OrangeDesktop from '../../assets/desktop/image-photography.jpg';
export default function Photography() {
  return (
    <section className="section_photography">
      <picture className="picture_photography">
        <source srcSet={OrangeDesktop} media="(min-width: 500px)" />
        <img src={Orange} alt="image of an orange" />
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
