import InputField from "../InputField";
export default function InputGroup() {
  return (
    <div className="input-group">
      <InputField label="initial investment" />
      <InputField label="annual investment" />
    </div>
  );
}
