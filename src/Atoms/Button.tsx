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
    <button className={`h-8 py-1 px-1.5 text-center rounded-sm ${props.className}`} onClick={props.onClick}>
      {props.icon && <FontAwesomeIcon icon={props.icon} className="dark:text-slate-50" />}
      {props.title && <span className="ml-2 font-medium leading-3 dark:text-slate-50">{props.title}</span>}
    </button>
  );
}

export default Button;
