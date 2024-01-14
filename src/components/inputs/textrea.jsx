import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const TextArea = ({ label, control, name, error }) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          <textarea
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {error[name] && (
            <span className="text-sm text-red-600">{error[name].message}</span>
          )}
        </div>
      )}
      name={name}
    />
  );
};

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};
