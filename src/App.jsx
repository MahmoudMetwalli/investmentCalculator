import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    "initial investment": 0,
    "annual investment": 0,
    "expected return": 0,
    duration: 0,
  });
  const annualData = calculateInvestmentResults({
    initialInvestment: userInput["initial investment"],
    annualInvestment: userInput["annual investment"],
    expectedReturn: userInput["expected return"],
    duration: userInput["duration"],
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
      {annualData.length && (
        <ResultsTable annualData={annualData} userInput={userInput} />
      )}
    </>
  );
}

export default App;
