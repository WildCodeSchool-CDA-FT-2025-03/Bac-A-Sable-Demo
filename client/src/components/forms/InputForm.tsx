import React from "react";

type InputFormProps = {
  name: string;
  title: string;
  ref?: React.RefObject<HTMLInputElement>;
};

function InputForm({ name, title, ref }: InputFormProps) {
  return (
    <label>
      {title}
      <input type="text" name={name} ref={ref} required />
    </label>
  );
}

export default InputForm;
