import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

interface DropDownMenuProps {
  className?: string;
  buttonClassName?: string;
  children: React.ReactNode;
}

function DropDownMenu(props: DropDownMenuProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent): void => {
    if (!node.current?.contains(e.target as HTMLElement)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // on mount
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    // on unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <div ref={node} className={`w-min h-min flex flex-col ${props.className}`}>
      <button
        className={`block w-6 h-6 text-center rounded-full ${props.buttonClassName}`}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faEllipsisV} className="w-full h-full" />
      </button>

      {/* items */}
      <div onClick={() => setOpen(false)} className="overflow-hidden rounded-sm w-44 drop-shadow-lg">
        {open && props.children}
      </div>
    </div>
  );
}

export default DropDownMenu;
