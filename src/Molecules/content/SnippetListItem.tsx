import { Dispatch } from "react";
import { ListedSnippet, SnippetsAction } from "../../Organisms/content/interfaces";
import DropDownMenu from "../../Atoms/DropDownMenu";
import DropDownMenuItem from "../../Atoms/DropDownMenuItem";

interface SnippetListItemProps {
  snippet: ListedSnippet;
  dispatch: Dispatch<SnippetsAction>;
}

function SnippetListItem(props: SnippetListItemProps): JSX.Element {
  const snippet: ListedSnippet = props.snippet;

  const onClickItem = (): void => props.dispatch({ type: "SELECT_SNIPPET", payload: snippet });

  const removeItem = (): void => props.dispatch({ type: "REMOVE_SNIPPET", payload: snippet });

  const bgColor: string = snippet.selected ? "bg-slate-200 dark:bg-gray-700" : "bg-slate-100 dark:bg-gray-800";

  const zIndex: string = (1000 - snippet.id).toString();

  return (
    <div
      className={`relative w-full h-14 border-b border-inherit px-1.5 py-1 cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-700 ${bgColor} ${zIndex}`}
      onClick={onClickItem}
      style={{ zIndex: zIndex }}
    >
      {/* Title */}
      <span className="font-normal dark:text-slate-50">{snippet.title === "" ? "No Title" : snippet.title}</span>

      {/* Prefix */}
      <span className="ml-1.5 text-xs font-light text-slate-400">
        {snippet.prefix === "" ? "No Prefix" : snippet.prefix}
      </span>

      {/* Description */}
      <span className="absolute bottom-0 mb-1 ml-1.5 left-0 font-normal text-sm dark:text-slate-50">
        {snippet.description === "" ? "No Description" : snippet.description}
      </span>

      <DropDownMenu
        className="absolute top-0 right-0 w-6 h-6 mt-1 mr-1"
        buttonClassName="mr-auto text-slate-500 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <DropDownMenuItem
          title="Remove this item"
          onClick={removeItem}
          className="bg-slate-50 hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-400"
        />
      </DropDownMenu>
    </div>
  );
}

export default SnippetListItem;
