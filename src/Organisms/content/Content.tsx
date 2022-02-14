import { useReducer, Dispatch } from "react";
import SnippetList from "./SnippetList";
import SnippetEditor from "./SnippetEditor";
import { defaultSnippet, ListedSnippet, SnippetsAction } from "./interfaces";

interface ContentProps {
  darkMode: boolean;
}

function Content(props: ContentProps): JSX.Element {
  const [snippets, dispatch]: [ListedSnippet[], Dispatch<SnippetsAction>] = useReducer(snippetsReducer, []);

  const selectedSnippet: ListedSnippet | undefined = snippets.find((snippet) => snippet.selected);

  return (
    <div className="flex grow">
      <SnippetList snippets={snippets} dispatch={dispatch}></SnippetList>
      <SnippetEditor {...props} snippet={selectedSnippet} dispatch={dispatch}></SnippetEditor>
    </div>
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
