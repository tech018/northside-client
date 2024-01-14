import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const SwitchInput = ({ label, name, error, control }) => {
  return (
    <Controller
      control={control}
      defaultValue={true}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="flex flex-col gap-6 mt-4 mb-2">
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                id="ripple-on"
                type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-500 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              />
              <label
                htmlFor="ripple-on"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              >
                <div
                  className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"
                ></div>
              </label>
            </div>
            <label
              htmlFor="ripple-on"
              className="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none"
            >
              {label}
            </label>
          </div>
          {error[name] && (
            <span className="text-sm text-red-600">{error[name]?.message}</span>
          )}
        </div>
      )}
      name={name}
    />
  );
};

export default SwitchInput;

SwitchInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};
