import { ListedSnippet, SnippetsAction } from "./snippet";
import SnippetListItem from "../../Molecules/content/SnippetListItem";
import SnippetListMenu from "../../Molecules/content/SnippetListMenu";

interface SnippetListProps {
  snippets: ListedSnippet[];
  dispatch: React.Dispatch<SnippetsAction>;
  importButton: JSX.Element;
  addButton: JSX.Element;
  exportButton: JSX.Element;
}

function SnippetList(props: SnippetListProps): JSX.Element {
  return (
    <div className="relative flex flex-col flex-none border-r bg-slate-100 dark:bg-gray-800 w-80 border-slate-300 dark:border-slate-600">
      <SnippetListMenu {...props} />

      {/* items */}
      {props.snippets.map((s) => (
        <SnippetListItem snippet={s} dispatch={props.dispatch} key={`snippet-${s.id}`}></SnippetListItem>
      ))}
    </div>
  );
}

export default SnippetList;
