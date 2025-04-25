import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ initial, annual, expected, duration }) => {
  const results = calculateInvestmentResults({
    initialInvestment: parseInt(initial),
    annualInvestment: parseInt(annual),
    expectedReturn: parseInt(expected),
    duration: parseInt(duration),
  });

  let totalInterest = 0;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            totalInterest += result.interest;
            const investedCapital = result.valueEndOfYear - totalInterest;
            {
              formatter.format(result.interest);
            }
            return (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
