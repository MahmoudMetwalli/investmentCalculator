import InputField from "../InputField";
export default function UserInput({ handleUserInputChange, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="initial investment"
          handleUserInputChange={handleUserInputChange}
          initialValue={userInput["initial investment"]}
        />
        <InputField
          label="annual investment"
          handleUserInputChange={handleUserInputChange}
          initialValue={userInput["annual investment"]}
        />
      </div>
      <div className="input-group">
        <InputField
          label="expected return"
          handleUserInputChange={handleUserInputChange}
          initialValue={userInput["expected return"]}
        />
        <InputField
          label="duration"
          handleUserInputChange={handleUserInputChange}
          initialValue={userInput["duration"]}
        />
      </div>
    </div>
  );
}
