import styled from "styled-components";
import { device } from "../../styles/Breakpoint";

interface StepProps {
  stepNumber: number;
  stepText: string;
  currentState: "completed" | "current" | "uncompleted";
}
interface StepTextProps {
  $currentState: "completed" | "current" | "uncompleted";
}

const Step = ({ stepNumber, stepText, currentState }: StepProps) => {
  return (
    <StepContainer>
      {currentState === "completed" && (
        <CompletedStep src="/icons/completed.svg" />
      )}
      {currentState === "current" && <ActiveStep>{stepNumber}</ActiveStep>}
      {currentState === "uncompleted" && (
        <IncompleteStep>{stepNumber}</IncompleteStep>
      )}
      <StepText $currentState={currentState}>
        <StepPrefix>Step {stepNumber}:</StepPrefix>
        {stepText}
      </StepText>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const ActiveStep = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--text-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
`;
const CompletedStep = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
`;

const IncompleteStep = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: white;
  color: var(--text-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--text-blue);

  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
`;
const StepText = styled.span<StepTextProps>`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 13.2px */
  text-transform: capitalize;
  text-align: center;

  ${({ $currentState }) => $currentState === "current" && `font-weight: bold;`}
  @media ${device.laptop} {
    display: flex;
    gap: 2px;
  }
`;
const StepPrefix = styled.span`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

export default Step;
