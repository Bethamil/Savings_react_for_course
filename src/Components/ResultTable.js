import styled from 'styled-components';

const StyledResultTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;

  & thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }

  & tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`;

const P = styled.p`
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
`;

const ResultTable = ({ results }) => {
  if (results.length === 0) {
    return <P>No data available</P>
  }

  return (
    <StyledResultTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((year) => {
          return (
            <tr key={year.key}>
              <td>{year.year}</td>
              <td>${year.savingsEndOfYear}</td>
              <td>${year.yearlyInterest}</td>
              <td>${year.yearlyInterest}</td>
              <td>${year.yearlyContribution}</td>
            </tr>
          )
        })}
      </tbody>
    </StyledResultTable>
  )
}

export default ResultTable;
