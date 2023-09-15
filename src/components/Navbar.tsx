import styled from "styled-components";
import { device } from "../styles/Breakpoint";
const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="/logo.svg" />
      <Sponsors>
        <SponsorImg src="/icons/mcafee.svg" />
        <SponsorImg src="/icons/norton.svg" />
      </Sponsors>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 106.667px;
  height: 20px;
  flex-shrink: 0;

  @media ${device.tabletL} {
    width: 192px;
    height: 36px;
    flex-shrink: 0;
  }
`;

const Sponsors = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.tabletL} {
    gap: 32px;
  }
`;

const SponsorImg = styled.img`
  width: 44px;
  height: 16px;

  @media ${device.tabletL} {
    width: 82px;
    height: 32px;
  }
`;

export default Navbar;
