import { useState } from "react";

export default function InputField({
  label,
  handleUserInputChange,
  initialValue,
}) {
  const [fieldValue, setfieldValue] = useState(initialValue);

  function handleValueChange(event) {
    setfieldValue(event.target.value);
    handleUserInputChange(label, event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input type="number" value={fieldValue} onChange={handleValueChange} />
    </p>
  );
}
