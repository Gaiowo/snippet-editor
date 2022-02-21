import { useState, Dispatch } from "react";
import AceEditor from "react-ace";
import Modal from "../../Atoms/Modal";
import Button from "../../Atoms/Button";
import { SnippetsAction } from "./snippet";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";

interface SnippetImportFormProps {
  darkMode: boolean;
  dispatch: Dispatch<SnippetsAction>;
  close: () => void;
}

type SnippetInJSON = {
  description: string;
  prefix: string | string[];
  body: string[];
};

type Parsed = {
  [key: string]: SnippetInJSON;
};

function SnippetImportForm(props: SnippetImportFormProps): JSX.Element {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const addSnippets = (parsed: Parsed) => {
    Object.keys(parsed).forEach((key: string) => {
      console.log("adding " + key);
      const snippet: SnippetInJSON = parsed[key];
      props.dispatch({
        type: "ADD_SNIPPET",
        payload: {
          selected: true,
          title: key,
          description: snippet.description,
          prefix: typeof snippet.prefix === "string" ? snippet.prefix : snippet.prefix.join(","),
          body: snippet.body.join("\n"),
        },
      });
    });
  };

  const importSnippets = (): void => {
    console.log("import!");
    const valueWithoutComments = value
      .replaceAll("\t", "")
      .split("\n")
      .filter((line: string) => !line.startsWith("//")) // remove comments
      .join("\n");

    try {
      const parsed: Parsed = JSON.parse(valueWithoutComments);
      addSnippets(parsed);

      props.close();
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(e.message);
      }
    }
  };

  return (
    <Modal className="w-1/2" {...props} title="Importing Snippets">
      <p className="mb-1 dark:text-slate-50">Paste the entire .code-snippets file or .json file to import.</p>
      <AceEditor
        className="w-full mb-3 h-96"
        width="full"
        height="full"
        theme={props.darkMode ? "monokai" : "github"}
        fontSize={16}
        mode="json"
        value={value}
        onChange={(value: string): void => setValue(value)}
      />
      <div className="flex w-full gap-2">
        <span className="block ml-auto leading-9 text-amber-600 dark:text-yellow-400">{message}</span>
        <Button
          title="Import"
          onClick={importSnippets}
          className="block px-2 leading-9 bg-gray-300 h-9 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
        />
      </div>
    </Modal>
  );
}
export default SnippetImportForm;
