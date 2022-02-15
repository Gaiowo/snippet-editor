import { useRef, useEffect } from "react";
import Button from "./Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  close: () => void;
  title?: string;
}

function Modal(props: ModalProps): JSX.Element {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent): void => {
      if (!node.current?.contains(e.target as HTMLElement)) {
        props.close();
      }
    };

    // on mount
    document.addEventListener("mousedown", handleClick);

    // on unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute w-full h-full backdrop-brightness-50 z-[9999]">
      <div
        ref={node}
        className={`rounded p-4 z-[10000] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-slate-200 dark:bg-gray-700 ${props.className}`}
      >
        <Button className="absolute w-6 h-6 leading-6 top-3 right-3" onClick={props.close} icon={faXmark} />
        {props.title && <h3 className="mb-3 text-xl font-semibold dark:text-slate-50">{props.title}</h3>}
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
