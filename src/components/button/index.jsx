import PropTypes from "prop-types";
import DefaultButton from "./default";
import WithIcon from "./withicon";

export default function AppButton({ ...props }) {
  const button = {
    default: DefaultButton,
    withicon: WithIcon,
  };

  const Button = button[props.variant] ?? button.default;

  return <Button {...props} />;
}

AppButton.propTypes = {
  variant: PropTypes.string,
};

AppButton.defaultProps = {
  variant: "default",
};
