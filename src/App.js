import { useState } from 'react';
import Form from './Components/Form';
import ResultTable from './Components/ResultTable';
import Header from './Components/Header';

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const resetHandler = () => {
    setYearlyData([]);
  };

  const calculateHandler = (userInput) => {
    resetHandler();
    let currentSavings = +userInput.currentSavings; 
    const yearlyContribution = +userInput.yearlyContribution; 
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    const newData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newData.push({
          key: `${i+1}year`,
          year: i + 1,
          yearlyInterest: yearlyInterest.toFixed(2),
          savingsEndOfYear: currentSavings.toFixed(2),
          yearlyContribution: yearlyContribution.toFixed(2),

      });
    }
    setYearlyData(newData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} onReset={resetHandler}/>
      <ResultTable results={yearlyData} />
    </div>
  );
}

export default App;
