import { styled } from "styled-components";
import { Image } from "../styles/common";
import { device } from "../styles/Breakpoint";

const GuaranteeSection = () => {
  return (
    <GuaranteeContainer>
      <StyledImage
        src="/images/satisfaction-badge.svg"
        width={48}
        height={48}
      />
      <GuaranteeText>
        If you are not completely thrilled with your Clarifion - We have a 30
        day satisfaction guarantee. Please refer to our return policy at the
        bottom of the page for more details. Happy Shopping!
      </GuaranteeText>
    </GuaranteeContainer>
  );
};

const GuaranteeContainer = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 50px;
  display: flex;
  gap: 16px;
`;

const StyledImage = styled(Image)`
  @media ${device.laptop} {
    width: 88px;
    height: 88px;
  }
`;

const GuaranteeText = styled.div`
  color: #4d5254;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */

  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export default GuaranteeSection;
