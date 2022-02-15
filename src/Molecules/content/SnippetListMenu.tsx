interface SnippetListMenuProps {
  importButton: JSX.Element;
  addButton: JSX.Element;
  exportButton: JSX.Element;
}

function SnippetListMenu(props: SnippetListMenuProps) {
  return (
    <div className="flex items-center w-full h-10 px-1 border-b bg-inherit border-inherit">
      {props.importButton}
      {props.addButton}
      {props.exportButton}
    </div>
  );
}

export default SnippetListMenu;
