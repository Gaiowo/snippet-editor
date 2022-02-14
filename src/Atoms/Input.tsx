import React from "react";

interface InputProps {
  title: string;
  id: string;
  className?: string;
  inputClassName?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps): JSX.Element {
  return (
    <div className="w-full">
      <label htmlFor={props.id} className="block pl-0.5 mb-1">
        {props.title}
      </label>
      <input
        type="text"
        id={props.id}
        className={`block w-full px-3 py-2 text-base border rounded shadow-sm focus:ring-1 focus:outline-0 ${props.inputClassName}`}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
