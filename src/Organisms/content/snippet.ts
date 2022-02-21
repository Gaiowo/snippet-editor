export interface Snippet {
  selected: boolean;
  title: string;
  prefix: string;
  description: string;
  body: string;
}

export const defaultSnippet: Snippet = {
  selected: true,
  title: "",
  prefix: "",
  description: "",
  body: "",
};

export interface ListedSnippet extends Snippet {
  id: number;
}

// Actions
interface CreateSnippet {
  type: "CREATE_SNIPPET";
}

interface AddSnippet {
  type: "ADD_SNIPPET";
  payload: Snippet;
}

interface RemoveSnippet {
  type: "REMOVE_SNIPPET";
  payload: ListedSnippet;
}

interface UpdateSnippet {
  type: "UPDATE_SNIPPET";
  payload: ListedSnippet;
}

export interface SelectSnippet {
  type: "SELECT_SNIPPET";
  payload: ListedSnippet;
}

export type SnippetsAction = CreateSnippet | AddSnippet | RemoveSnippet | UpdateSnippet | SelectSnippet;

export function snippetsReducer(snippets: ListedSnippet[], action: SnippetsAction): ListedSnippet[] {
  switch (action.type) {
    case "CREATE_SNIPPET":
      const newSnippets: ListedSnippet[] = [...snippets];
      // set all snippets to unselected
      newSnippets.forEach((snippet) => (snippet.selected = false));
      // add new snippet
      newSnippets.push({ ...defaultSnippet, id: snippets.length });
      return newSnippets;
    case "ADD_SNIPPET":
      const unSelected: ListedSnippet[] = snippets.map((snippet) => ({ ...snippet, selected: false }));
      return [...unSelected, { ...action.payload, id: snippets.length }];
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
