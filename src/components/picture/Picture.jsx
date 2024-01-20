import React from 'react';
import './Picture.scss';
import MilkImg from '../../assets/mobile/image-gallery-milkbottles.jpg';
import MilkImgDesktop from '../../assets/desktop/image-gallery-milkbottles.jpg';
import ConeImg from '../../assets/mobile/image-gallery-cone.jpg';
import ConeImgDesktop from '../../assets/desktop/image-gallery-cone.jpg';
import SugarImg from '../../assets/mobile/image-gallery-sugar-cubes.jpg';
import SugarImgDesktop from '../../assets/desktop/image-gallery-sugarcubes.jpg';
import OrangeImg from '../../assets/mobile/image-gallery-orange.jpg';
import OrangeImgDesktop from '../../assets/desktop/image-gallery-orange.jpg';

export default function Picture() {
  return (
    <section className="picture">
      <picture className="picture_milk">
        <source srcSet={MilkImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={MilkImg}
          alt="image of milk bottles"
        />
      </picture>
      <picture className="picture_cone">
        <source srcSet={ConeImgDesktop} media="(min-width: 500px)" />
        <img className="picture_image" src={ConeImg} alt="image of a cone" />
      </picture>
      <picture className="picture_sugar">
        <source srcSet={SugarImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={SugarImg}
          alt="image of sugar cubes"
        />
      </picture>
      <picture className="picture_orange">
        <source srcSet={OrangeImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={OrangeImg}
          alt="image of an orange"
        />
      </picture>
    </section>
  );
}
