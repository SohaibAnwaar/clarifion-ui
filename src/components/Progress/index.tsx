import styled from "styled-components";

import { device } from "../../styles/Breakpoint";
import Step from "./Step";

const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressTitle>Wait ! your order in progress.</ProgressTitle>
      <ProgressSubtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </ProgressSubtitle>
      <ConfirmationStepsContainer>
        <Step currentState="completed" stepNumber={1} stepText="Cart Review" />
        <Step currentState="completed" stepNumber={2} stepText="Checkout" />
        <Step currentState="current" stepNumber={3} stepText="Special Offer" />
        <Step
          currentState="uncompleted"
          stepNumber={4}
          stepText="Confirmation"
        />
      </ConfirmationStepsContainer>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;

const ProgressTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 44.8px */
  text-transform: capitalize;

  @media ${device.tabletL} {
    font-size: 48px;
  }
`;

const ProgressSubtitle = styled.h2`
  color: var(--text-gray);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-transform: capitalize;

  @media ${device.tabletL} {
    font-size: 24px;
  }
`;

const ConfirmationStepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
  margin-bottom: 24px;

  @media ${device.tabletL} {
    margin-top: 60px;
    margin-bottom: 40px;
  }
`;

export default Progress;
