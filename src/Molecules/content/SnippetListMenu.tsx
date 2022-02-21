import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Atoms/Button";

interface SnippetListMenuProps {
  importButton: JSX.Element;
  createButton: JSX.Element;
  exportButton: JSX.Element;
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

function SnippetListMenu(props: SnippetListMenuProps) {
  return (
    <>
      {/* toggle */}
      <div
        className="flex items-center justify-between w-full h-10 px-2 border-b cursor-pointer shrink-0 lg:hidden bg-inherit dark:text-slate-50 border-inherit"
        onClick={() => props.setShown(!props.shown)}
      >
        <FontAwesomeIcon icon={faList} />
        <Button icon={props.shown ? faChevronDown : faChevronUp} onClick={() => {}} />
      </div>
      {props.shown && (
        <div className="flex items-center w-full h-10 px-1 border-b shrink-0 bg-inherit border-inherit">
          {props.importButton}
          {props.createButton}
          {props.exportButton}
        </div>
      )}
    </>
  );
}

export default SnippetListMenu;
