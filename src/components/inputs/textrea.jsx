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
            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
          >
            {label}
          </label>
          <textarea
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-slate-500 focus:border-slate-500 focus:ring-1"
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
