import PropTypes from "prop-types";
import DefaultCarousel from "./default";

export default function Carousel({ ...props }) {
  const carousel = {
    default: DefaultCarousel,
  };

  const CarouselComponent = carousel[props.variant] ?? carousel.default;

  return <CarouselComponent {...props} />;
}

Carousel.propTypes = {
  variant: PropTypes.string,
};

Carousel.defaultProps = {
  variant: "default",
};
