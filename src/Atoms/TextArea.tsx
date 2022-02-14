import React from "react";

interface TextAreaProps {
  title: string;
  id: string;
  className?: string;
  textAreaClassName?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea(props: TextAreaProps): JSX.Element {
  return (
    <div className="w-full">
      <label htmlFor={props.id} className="block pl-0.5 mb-1">
        {props.title}
      </label>
      <textarea
        id={props.id}
        className={`block w-full px-3 py-2 text-base border rounded shadow-sm focus:ring-1 focus:outline-0 ${props.textAreaClassName}`}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextArea;
