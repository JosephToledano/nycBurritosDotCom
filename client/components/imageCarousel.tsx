import React, { useState } from "react";

const ImageCarousel = () => {
  const [currentImageIndex, setImageIndex] = useState<number>(0);

  let reviews = [1, 2, 3];
  const previousSlide = (): void => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setImageIndex(index);
  };

  const Arrow = ({ direction, clickFunction, glyph }): JSX.Element => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );

  const ImageSlide = ({ url }): JSX.Element => {
    return <div className='image-slide'> </div>;
  };
  return (
    <div className='carousel'>
      <Arrow direction='left' clickFunction={previousSlide} glyph='&#9664;' />

      <Arrow
        // className={Arrow}
        direction='right'
        clickFunction={nextSlide}
        glyph='&#9654;'
      />
    </div>
  );
};

export default ImageCarousel;
