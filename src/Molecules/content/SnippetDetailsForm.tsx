import { Dispatch } from "react";
import { ListedSnippet, SnippetsAction } from "../../Organisms/content/snippet";
import Input from "../../Atoms/Input";
import TextArea from "../../Atoms/TextArea";

interface SnippetDetailsFormProps {
  snippet: ListedSnippet;
  dispatch: Dispatch<SnippetsAction>;
}

function SnippetDetailsForm({ snippet, dispatch }: SnippetDetailsFormProps): JSX.Element {
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "UPDATE_SNIPPET", payload: { ...snippet, title: event.target.value } });
  };

  const onChangePrefix = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "UPDATE_SNIPPET", payload: { ...snippet, prefix: event.target.value } });
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch({ type: "UPDATE_SNIPPET", payload: { ...snippet, description: event.target.value } });
  };

  return (
    <div className="flex flex-col flex-none h-full gap-3 px-3 py-2 bg-slate-100 dark:bg-gray-700 w-80 dark:text-slate-200 ">
      <Input
        title="Title"
        id="title"
        inputClassName="border-gray-300 dark:border-gray-700 bg-slate-50 dark:bg-gray-600 focus:ring-gray-300 focus:dark:ring-slate-500"
        value={snippet.title}
        onChange={onChangeTitle}
      />
      <Input
        title="Prefix"
        id="prefix"
        inputClassName="border-gray-300 dark:border-gray-700 bg-slate-50 dark:bg-gray-600 focus:ring-gray-300 focus:dark:ring-slate-500"
        value={snippet.prefix}
        onChange={onChangePrefix}
      />
      <TextArea
        title="Description"
        id="description"
        textAreaClassName="max-h-[20rem] min-h-[10rem] border-gray-300 dark:border-gray-700 bg-slate-50 dark:bg-gray-600 focus:ring-gray-300 focus:dark:ring-slate-500"
        value={snippet.description}
        onChange={onChangeDescription}
      />
    </div>
  );
}
export default SnippetDetailsForm;
