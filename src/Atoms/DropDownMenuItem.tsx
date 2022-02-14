interface DropDownMenuItemProps {
  title: string;
  onClick: () => void;
  className?: string;
}

function DropDownMenuItem(props: DropDownMenuItemProps): JSX.Element {
  return (
    <button
      className={`h-8 w-full py-1 px-1.5 text-left font-normal leading-3 dark:text-slate-50 ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default DropDownMenuItem;
