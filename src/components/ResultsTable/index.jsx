import { formatter } from "../../util/investment";

export default function ResultsTable({ annualData, userInput }) {
  let investmentValue =
    userInput["initial investment"] + userInput["annual investment"];
  let totralInterest = 0;
  return (
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
      <tbody></tbody>
      {annualData.map((row, index) => {
        investmentValue += row.interest;
        totralInterest += row.interest;
        return (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(investmentValue)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(totralInterest)}</td>
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
    </table>
  );
}
