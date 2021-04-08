import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 32px;
  margin: 48px auto 0;
  width: 600px;
  font-family: Quicksand, arial, sans-serif;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: ${(props) => (props.big ? '54px' : props.small ? '24px' : '34px')};
  font-weight: ${(props) => (props.bold ? 'bold' : '100')};
  text-align: center;
  transition: color 0.25s ease-in;
  color: ${(props) => (props.red ? '#f55523' : '#25c0a6')};
  margin-top: ${(props) => (props.marginTop ? '10px' : '0px')};

  &:hover {
    color: #d4004b;
  }
`;

export const CardBar = styled.div`
  background: #f55523;
  height: 12px;
  width: 25%;
  animation: ${rotate} 1s linear;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  ${(props) => props.center && 'display:flex;justify-content:center;'};
  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 250px;
  font-family: inherit;
  font-size: 18px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #f6f6f6;
  margin: 6px;

  font-size: 14px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }

  &:selected {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardCheckboxOptions = styled.label`
  color: #f55523;
  transition: color 0.25s ease-in;
  cursor: pointer;
  font-size: 14px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  width: 250px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => (props.logout ? '#d4004b' : '#f55523')};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  margin-top: ${(props) => (props.marginTop ? '20px' : '0px')};
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }

  &:disabled {
    background-color: #c3c3c3;
  }
`;

export const CardObs = styled.p`
  display: inline-block;
  font-size: 24px;
  color: #aaa;
  transition: color 0.25s ease-in;

  &:hover {
    color: #f55523;
  }
`;

export const CardError = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #d4004b;
  transition: color 0.25s ease-in;
  margin: 4px;
`;

export const CardList = styled.ul`
  transition: color 0.25s ease-in;
  margin: 4px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardListItem = styled.li`
  transition: color 0.25s ease-in;
  border-bottom: 1px solid rgb(245 85 35 / 40%);
  padding: 10px;
  font-size: ${(props) => (props.first ? '24px' : '18px')};
  font-weight: ${(props) => (props.bold ? 'bold' : props.first ? '300' : '200')};
  color: #d4004b;
`;
