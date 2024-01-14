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
              className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-slate-500 focus:border-slate-500 focus:ring-1"
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
