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

export type SnippetsAction = CreateSnippet | RemoveSnippet | UpdateSnippet | SelectSnippet;
