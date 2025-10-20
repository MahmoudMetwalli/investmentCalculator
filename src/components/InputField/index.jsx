import { useState } from "react";

export default function InputField({ label }) {
  const [fieldValue, setfieldValue] = useState("");

  function handleValueChange(event) {
    setfieldValue(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input type="number" value={fieldValue} onChange={handleValueChange} />
    </div>
  );
}
