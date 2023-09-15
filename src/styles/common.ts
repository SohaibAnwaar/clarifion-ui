import styled from "styled-components";
import { device } from "./Breakpoint";

export const colors = {
  primary: "#140a3f",
  secondary: "#358cf8",
};

export const DarkHeading = styled.h3`
  font-size: 16px;
  color: white;

  @media ${device.tabletL} {
    font-size: 12px;
  }
`;

export const DarkText = styled.span`
  font-size: 16px;
  color: var(--light-gray);

  @media ${device.tabletL} {
    font-size: 12px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 30px;

  @media ${device.tabletL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 20px;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Image = styled.img``;
