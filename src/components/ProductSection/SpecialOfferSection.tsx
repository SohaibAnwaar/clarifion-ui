import { styled } from "styled-components";
import { Image } from "../styles/common";

const SpecialOfferSection = () => {
  return (
    <SpecialOffer>
      <SpecialOfferBlue>ONE TIME ONLY</SpecialOfferBlue> special price for 6
      extra Clarifion for only <SpecialOfferBlue>$14 each </SpecialOfferBlue>
      ($84.00 total!)
    </SpecialOffer>
  );
};

const SpecialOffer = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
`;

const SpecialOfferBlue = styled.span`
  color: var(--text-blue);
`;
export default SpecialOfferSection;
