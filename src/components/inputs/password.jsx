import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
export default function PasswordInput({ control, error, label, name, type }) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}
            </label>
          </div>
          <div className="mt-2">
            <input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type={type}
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  control: PropTypes.func.isRequired,
  erros: PropTypes.object.isRequired,
};
