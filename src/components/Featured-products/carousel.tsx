"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./carousel-dots";
import { PrevButton, NextButton, usePrevNextButtons } from "./carousel-arrow";
import { EmblaOptionsType } from "embla-carousel";
import "./carousel.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ProductCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 111</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
          <div className="embla__slide">Slide 4</div>
          <div className="embla__slide">Slide 5</div>
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
