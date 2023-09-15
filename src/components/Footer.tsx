import { styled } from "styled-components";
import { Image } from "../styles/common";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <CopyrightSection>
          <Text> Copyright © {new Date().getFullYear()}</Text>
          <Email>clarifionsupport@clarifion.com</Email>
        </CopyrightSection>
        <SecuritySection>
          <Image src="/icons/lock.svg" />
          <SecurityText>Secure 256-bit SSL encryption.</SecurityText>
        </SecuritySection>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: var(--bg-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  padding: 20px 0;
`;

const FooterWrapper = styled.div`
  width: 80%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 16px;
`;

const CopyrightSection = styled.div`
  text-transform: capitalize;
  display: flex;
  text-align: center;
  padding: 8px 0;
`;

const Text = styled.span`
  padding-right: 12px;
  font-weight: 400;
`;

const Email = styled.span`
  padding-left: 12px;
  border-left: 1px solid white;

  font-weight: 400;
`;

const SecurityText = styled.span``;

const SecuritySection = styled.div`
  font-weight: 400;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export default Footer;
