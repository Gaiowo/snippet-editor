import { Dispatch } from "react";
import SnippetDetailsForm from "../../Molecules/content/SnippetDetailsForm";
import SnippetBodyEditor from "../../Molecules/content/SnippetBodyEditor";
import { ListedSnippet, SnippetsAction } from "./snippet";

interface SnippetEditorProps {
  darkMode: boolean;
  snippet?: ListedSnippet;
  dispatch: Dispatch<SnippetsAction>;
}

function SnippetEditor(props: SnippetEditorProps): JSX.Element {
  return (
    <div className="flex grow">
      {props.snippet ? (
        <>
          <SnippetDetailsForm snippet={props.snippet} dispatch={props.dispatch} />
          <SnippetBodyEditor {...props} snippet={props.snippet} />
        </>
      ) : (
        <div className="p-5 grow bg-slate-100 dark:bg-gray-800 dark:text-slate-200">
          <p>Select a snippet to Edit!</p>
        </div>
      )}
    </div>
  );
}

export default SnippetEditor;
