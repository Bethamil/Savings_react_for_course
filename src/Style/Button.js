import styled from 'styled-components';


export const Button = styled.button`
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: linear-gradient(180deg, #1f584b, #17493d);
  color: #c2e9e0;
  

  &:hover {
  background: linear-gradient(180deg, #1b5346, #113c32);
}
`;

export const ButtonAlt = styled(Button)`
  border: none;
  background: transparent;
  
  &:hover {
  background: transparent;
  color: #91e1d0;
  }
`;
