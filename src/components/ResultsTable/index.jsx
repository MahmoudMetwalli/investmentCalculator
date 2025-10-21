import { formatter } from "../../util/investment";
import { calculateInvestmentResults } from "../../util/investment";

export default function ResultsTable({ userInput }) {
  const annualData = calculateInvestmentResults({
    initialInvestment: userInput["initial investment"],
    annualInvestment: userInput["annual investment"],
    expectedReturn: userInput["expected return"],
    duration: userInput["duration"],
  });
  let investmentValue =
    userInput["initial investment"] + userInput["annual investment"];
  let totalInterest = 0;
  const output =
    annualData.length === 0 ? (
      <p className="center">
        Please enter your investment details to get started.
      </p>
    ) : (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Ivestment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((row, index) => {
            investmentValue += row.interest;
            totalInterest += row.interest;
            return (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{formatter.format(investmentValue)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>
                  {formatter.format(
                    userInput["initial investment"] +
                      userInput["annual investment"] +
                      index * userInput["annual investment"]
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  return output;
}
