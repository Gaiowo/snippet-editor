import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

interface DropDownMenuProps {
  className?: string;
  buttonClassName?: string;
  children: React.ReactNode;
}

function DropDownMenu(props: DropDownMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent): void => {
    if (!node.current?.contains(e.target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // on mount
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    // on unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <div ref={node} className={`z-0 overflow-visible ${props.className}`}>
      <button
        className={`block w-full h-full text-center rounded-full ${props.buttonClassName}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faEllipsisV} className="w-full h-full" />
      </button>

      {/* items */}
      <div onClick={() => setIsOpen(false)} className="z-10 overflow-hidden rounded-sm w-44 drop-shadow-lg">
        {isOpen && props.children}
      </div>
    </div>
  );
}

export default DropDownMenu;
