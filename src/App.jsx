import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    "initial investment": 0,
    "annual investment": 0,
    "expected return": 0,
    duration: 0,
  });

  function handleUserInputChange(label, value) {
    setUserInput((prevState) => {
      const updatedState = {
        ...prevState,
        [label]: Number(value),
      };
      return updatedState;
    });
  }
  return (
    <>
      <UserInput
        handleUserInputChange={handleUserInputChange}
        userInput={userInput}
      />
      <ResultsTable userInput={userInput} />
    </>
  );
}

export default App;
