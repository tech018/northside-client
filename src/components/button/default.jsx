import PropTypes from "prop-types";
const DefaultButton = ({ handlePress, label, type }) => {
  return (
    <button
      type={type}
      onClick={handlePress}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {label}
    </button>
  );
};
export default DefaultButton;

DefaultButton.propTypes = {
  handlePress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
