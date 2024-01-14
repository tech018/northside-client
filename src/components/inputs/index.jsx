import PropTypes from "prop-types";
import DefaultInout from "./default";
import PasswordInput from "./password";
import TextArea from "./textrea";

export default function AppInput({ ...props }) {
  const input = {
    default: DefaultInout,
    password: PasswordInput,
    address: TextArea,
  };

  const Input = input[props.variant] ?? input.default;

  return <Input {...props} />;
}

AppInput.propTypes = {
  variant: PropTypes.string,
};

AppInput.defaultProps = {
  variant: "default",
};
