import PropTypes from "prop-types";
const WithIcon = ({ handlePress, label, type, icon }) => {
  return (
    <button
      type={type}
      onClick={handlePress}
      className="flex mt-2 w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <div className="inline-flex gap-2">
        <span>{label}</span>
        {icon}
      </div>
    </button>
  );
};

export default WithIcon;

WithIcon.propTypes = {
  handlePress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

WithIcon.defaultProps = {
  icon: {},
};
