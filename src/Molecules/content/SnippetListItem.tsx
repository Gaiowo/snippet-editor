import { Dispatch } from "react";
import { ListedSnippet, SnippetsAction } from "../../Organisms/content/snippet";
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
      className={`shrink-0 relative w-full h-14 border-b border-inherit cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-700 ${bgColor} ${zIndex}`}
      onClick={onClickItem}
      style={{ zIndex: zIndex }}
    >
      <div className="flex flex-col justify-between w-4/5 h-full px-1.5 py-1">
        <div className="flex items-center w-full h-min">
          {/* Title */}
          <span className="inline-block font-normal max-w-[60%] overflow-ellipsis overflow-hidden dark:text-slate-50 whitespace-nowrap">
            {snippet.title === "" ? "No Title" : snippet.title}
          </span>

          {/* Prefix */}
          <span className="inline-block max-w-[40%] overflow-ellipsis overflow-hidden ml-1.5 text-xs font-light text-slate-400 whitespace-nowrap">
            {snippet.prefix}
          </span>
        </div>

        {/* Description */}
        <span className="block w-full overflow-hidden text-sm font-normal dark:text-slate-50 overflow-ellipsis whitespace-nowrap">
          {snippet.description === "" ? "No Description" : snippet.description}
        </span>
      </div>

      <DropDownMenu
        className="absolute top-0 right-0 mt-1 mr-1"
        buttonClassName="ml-auto text-slate-500 hover:bg-gray-300 dark:hover:bg-gray-600"
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
