import DarkModeToggle from "../../Molecules/header/DarkModeToggle";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between h-10 border-b bg-slate-50 dark:bg-gray-900 dark:border-0">
      <span className="ml-2 text-lg font-semibold leading-10 tracking-wide dark:text-slate-50">
        VSCode Snippet Editor
      </span>
      <DarkModeToggle {...props} />
    </div>
  );
}

export default Header;
