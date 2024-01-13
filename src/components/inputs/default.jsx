import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

export default function DefaultInput({ label, name, type, control, error }) {
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
          <div className="mt-2">
            <input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            />
            {error[name] && (
              <span className="text-sm text-red-600">
                {error[name].message}
              </span>
            )}
          </div>
        </div>
      )}
      name={name}
    />
  );
}

DefaultInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  control: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};
