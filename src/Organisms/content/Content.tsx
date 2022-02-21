import { useReducer, useState, Dispatch } from "react";
import { faFileImport, faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";
import SnippetList from "./SnippetList";
import SnippetEditor from "./SnippetEditor";
import SnippetImportForm from "./SnippetImportForm";
import SnippetExportForm from "./SnippetExportForm";
import Button from "../../Atoms/Button";
import { snippetsReducer, ListedSnippet, SnippetsAction } from "./snippet";

interface ContentProps {
  darkMode: boolean;
}

function Content(props: ContentProps): JSX.Element {
  const [snippets, dispatch]: [ListedSnippet[], Dispatch<SnippetsAction>] = useReducer(snippetsReducer, []);
  const [isImportClicked, setImportClicked] = useState(false);
  const [isExportClicked, setExportClicked] = useState(false);

  const importButton = (
    <Button
      icon={faFileImport}
      title="Import"
      className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
      onClick={() => setImportClicked(true)}
    />
  );

  const createButton = (
    <Button
      icon={faPlus}
      title="Create"
      className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
      onClick={() => dispatch({ type: "CREATE_SNIPPET" })}
    />
  );

  const exportButton = (
    <Button
      icon={faFileExport}
      title="Export"
      className="ml-auto bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
      onClick={() => setExportClicked(true)}
    />
  );

  const snippetListProps = { snippets, dispatch, importButton, createButton, exportButton };

  const selectedSnippet: ListedSnippet | undefined = snippets.find((snippet) => snippet.selected);

  return (
    <>
      <div className="flex flex-col flex-wrap content-start w-full h-[calc(100vh-2.5rem)] lg:flex-row">
        <SnippetList {...snippetListProps} />
        <SnippetEditor {...props} snippet={selectedSnippet} dispatch={dispatch}></SnippetEditor>
      </div>
      {isImportClicked && <SnippetImportForm {...props} close={() => setImportClicked(false)} dispatch={dispatch} />}
      {isExportClicked && <SnippetExportForm {...props} close={() => setExportClicked(false)} snippets={snippets} />}
    </>
  );
}

export default Content;
