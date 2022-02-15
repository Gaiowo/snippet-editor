import { Dispatch } from "react";
import { faFileImport, faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { SnippetsAction } from "../../Organisms/content/interfaces";
import Button from "../../Atoms/Button";

interface SnippetListMenuProps {
  dispatch: Dispatch<SnippetsAction>;
}

function SnippetListMenu(props: SnippetListMenuProps) {
  const onClickAdd = (): void => props.dispatch({ type: "CREATE_SNIPPET" });

  return (
    <div className="flex items-center w-full h-10 px-1 border-b bg-inherit border-inherit">
      <Button
        icon={faFileImport}
        title="Import"
        className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
        onClick={() => {}}
      />
      <Button
        icon={faPlus}
        title="Add"
        className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
        onClick={onClickAdd}
      />
      <Button
        icon={faFileExport}
        title="Export"
        className="ml-auto bg-gray-400 hover:bg-gray-500 dark:bg-gray-500 dark:hover:bg-gray-400 dark:text-slate-50"
        onClick={() => {}}
      />
    </div>
  );
}

export default SnippetListMenu;
