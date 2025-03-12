import React from "react";

type InputFormProps = {
  value: string;
  name: string;
  title: string;
  handleNewRepo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputForm({ handleNewRepo, value, name, title }: InputFormProps) {
  return (
    <label>
      {title}
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleNewRepo}
        required
      />
    </label>
  );
}

export default InputForm;
