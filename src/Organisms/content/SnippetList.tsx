import { useState } from "react";
import { ListedSnippet, SnippetsAction } from "./snippet";
import SnippetListItem from "../../Molecules/content/SnippetListItem";
import SnippetListMenu from "../../Molecules/content/SnippetListMenu";

interface SnippetListProps {
  snippets: ListedSnippet[];
  dispatch: React.Dispatch<SnippetsAction>;
  importButton: JSX.Element;
  createButton: JSX.Element;
  exportButton: JSX.Element;
}

function SnippetList(props: SnippetListProps): JSX.Element {
  const [shown, setShown] = useState(true);

  return (
    <div
      className={`overflow-y-auto flex flex-col items-center lg:flex-none w-full lg:border-r lg:w-80 lg:h-full bg-slate-100 dark:bg-gray-800 border-slate-300 dark:border-slate-600 ${
        shown && "h-full"
      }`}
    >
      <SnippetListMenu {...props} shown={shown} setShown={setShown} />

      {/* items */}
      {shown &&
        props.snippets.map((s) => (
          <SnippetListItem snippet={s} dispatch={props.dispatch} key={`snippet-${s.id}`}></SnippetListItem>
        ))}
      {shown && props.snippets.length === 0 && (
        <div className="w-full p-3">
          <p className="dark:text-slate-50">There are no snippets.</p>
          <p className="mt-3 dark:text-slate-50">You can import existing snippets or create a new one.</p>
        </div>
      )}
    </div>
  );
}

export default SnippetList;
