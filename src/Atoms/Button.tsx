import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  icon?: IconDefinition;
  title?: string;
  onClick: () => void;
  className?: string;
}

function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={`inline-flex justify-center items-center gap-1.5 h-8 px-1.5 py-0 rounded-sm dark:text-slate-50 ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.title && <span className={`text-sm font-semibold tracking-wider`}>{props.title}</span>}
    </button>
  );
}

export default Button;
