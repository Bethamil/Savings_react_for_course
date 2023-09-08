import {Button, ButtonAlt} from '../Style/Button';
import { useState } from 'react';
import FormElement from './FormElement';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

const StyledActions = styled.p`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;



const Form = (props) => {
  const [data, setData] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(data);
  }

  const inputChangeHandler = (identifier, value) => {
    setData((prevState) => {
      return { ...prevState, [identifier]: value }
    });
  }

  const resetHandler = (e) => {
    e.preventDefault();
    setData({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    });
    props.onReset();
  }


  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInputGroup>
        <FormElement label="Current Savings ($)" id="currentSavings" type="number" onChange={inputChangeHandler} value={data.currentSavings} />
        <FormElement label="Yearly Savings ($)" id="yearlyContribution" type="number" onChange={inputChangeHandler} value={data.yearlyContribution} />
      </StyledInputGroup>
      <StyledInputGroup>
        <FormElement label="Expected Interest (%)" id="expectedReturn" type="number" onChange={inputChangeHandler} value={data.expectedReturn} />
        <FormElement label="Investment Duration (years)" id="duration" type="number" onChange={inputChangeHandler} value={data.duration} />
      </StyledInputGroup>
      <StyledActions>
        <ButtonAlt type="reset" onClick={resetHandler}>
          Reset
        </ButtonAlt>
        <Button type="submit" className="">
          Calculate
        </Button>
      </StyledActions>
    </StyledForm>
  )
}

export default Form;