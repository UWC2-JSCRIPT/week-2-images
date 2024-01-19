import "./App.css";
import PropTypes from "prop-types";

// Different way of delcaring function
// function Picture({imgSrc, imgAlt}) {
//   return (
//     <img src={imgSrc} alt={imgAlt} />
//   )
// }

const Picture = ({ imgSrc, imgAlt }) => {
  return <img src={imgSrc} alt={imgAlt} />;
};

Picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Picture;
