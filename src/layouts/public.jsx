import Footer from "./footer";
import Menu from "./menu";
import PropTypes from "prop-types";

const Public = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

Public.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Public;
