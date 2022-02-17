import { useEffect } from "react";
import Modal from "../../Atoms/Modal";
import Button from "../../Atoms/Button";
import { ListedSnippet } from "./snippet";

interface SnippetExportFormProps {
  darkMode: boolean;
  snippets: ListedSnippet[];
  close: () => void;
}

function SnippetExportForm(props: SnippetExportFormProps): JSX.Element {
  const fileBody: { [key: string]: { prefix: string[]; body: string[]; description: string } } = {};

  // set fileBody on mount
  useEffect(() => {
    for (const snippet of props.snippets) {
      fileBody[snippet.title] = {
        prefix: snippet.prefix.split(","),
        body: snippet.body.split("\n"),
        description: snippet.description,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copyFileBody = (): void => {
    navigator.clipboard.writeText(JSON.stringify(fileBody, null, 2)).then(() => props.close());
  };

  return (
    <Modal className="w-1/3" {...props} title="Exporting Snippets">
      <p className="mb-1 dark:text-slate-50">Snippets are ready to export.</p>
      <div className="w-full">
        <Button
          title="Copy to Clipboard"
          onClick={copyFileBody}
          className="block px-2 ml-auto leading-9 bg-gray-300 h-9 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-slate-50"
        />
      </div>
    </Modal>
  );
}

export default SnippetExportForm;
