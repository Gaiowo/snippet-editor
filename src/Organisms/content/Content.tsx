import { useReducer, useState, Dispatch } from "react";
import { faFileImport, faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";
import SnippetList from "./SnippetList";
import SnippetEditor from "./SnippetEditor";
import SnippetImportForm from "./SnippetImportForm";
import SnippetExportForm from "./SnippetExportForm";
import Button from "../../Atoms/Button";
import { defaultSnippet, ListedSnippet, SnippetsAction } from "./snippet";

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
      className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
      onClick={() => setImportClicked(true)}
    />
  );

  const addButton = (
    <Button
      icon={faPlus}
      title="Add"
      className="mr-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
      onClick={() => dispatch({ type: "CREATE_SNIPPET" })}
    />
  );

  const exportButton = (
    <Button
      icon={faFileExport}
      title="Export"
      className="ml-auto bg-gray-400 hover:bg-gray-500 dark:bg-gray-500 dark:hover:bg-gray-400 dark:text-slate-50"
      onClick={() => setExportClicked(true)}
    />
  );

  const snippetListProps = { snippets, dispatch, importButton, addButton, exportButton };

  const selectedSnippet: ListedSnippet | undefined = snippets.find((snippet) => snippet.selected);

  return (
    <>
      <div className="flex grow">
        <SnippetList {...snippetListProps} />
        <SnippetEditor {...props} snippet={selectedSnippet} dispatch={dispatch}></SnippetEditor>
      </div>
      {isImportClicked && <SnippetImportForm {...props} close={() => setImportClicked(false)} dispatch={dispatch} />}
      {isExportClicked && <SnippetExportForm {...props} close={() => setExportClicked(false)} snippets={snippets} />}
    </>
  );
}

let snippetCount: number = 0;

function snippetsReducer(snippets: ListedSnippet[], action: SnippetsAction): ListedSnippet[] {
  switch (action.type) {
    case "CREATE_SNIPPET":
      const newSnippets: ListedSnippet[] = [...snippets];
      // set all snippets to unselected
      newSnippets.forEach((snippet) => (snippet.selected = false));
      // add new snippet
      newSnippets.push({ ...defaultSnippet, id: snippetCount++ });
      return newSnippets;
    case "ADD_SNIPPET":
      const unSelected: ListedSnippet[] = snippets.map((snippet) => ({ ...snippet, selected: false }));
      return [...unSelected, { ...action.payload, id: snippetCount++ }];
    case "REMOVE_SNIPPET":
      return snippets.filter((snippet) => snippet.id !== action.payload.id);
    case "UPDATE_SNIPPET":
      return snippets.map((snippet) => (snippet.id === action.payload.id ? action.payload : snippet));
    case "SELECT_SNIPPET":
      return snippets.map((snippet) =>
        snippet.id === action.payload.id ? { ...snippet, selected: true } : { ...snippet, selected: false }
      );
  }
}

export default Content;
