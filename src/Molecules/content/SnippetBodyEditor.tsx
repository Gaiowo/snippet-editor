import AceEditor from "react-ace";
import { ListedSnippet, SnippetsAction } from "../../Organisms/content/snippet";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";

interface SnippetBodyEditorProps {
  darkMode: boolean;
  snippet: ListedSnippet;
  dispatch: React.Dispatch<SnippetsAction>;
}

function SnippetBodyEditor(props: SnippetBodyEditorProps): JSX.Element {
  const onChange = (value: string): void => {
    props.dispatch({ type: "UPDATE_SNIPPET", payload: { ...(props.snippet as ListedSnippet), body: value } });
  };

  return (
    <>
      {/* remove cursor when the Ace Editor is not focused */}
      <style>{`.ace_hidden-cursors { display: none; }`}</style>
      <AceEditor
        className="grow caret-transparent focus:caret-inherit"
        name={`snippet-${props.snippet.id}`}
        theme={props.darkMode ? "monokai" : "github"}
        width="full"
        height="full"
        fontSize={16}
        value={props.snippet.body}
        onChange={onChange}
        placeholder="/* Type snippet body here! */"
      />
    </>
  );
}

export default SnippetBodyEditor;
