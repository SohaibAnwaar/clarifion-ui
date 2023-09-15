import { styled } from "styled-components";
import { Image } from "../../styles/common";
import { device } from "../../styles/Breakpoint";
import GuaranteeSection from "../GuaranteeSection";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <LeftRow>
        <StyledImage src="/images/product-image.png" width={575} height={591} />
        <ReviewContainer>
          <ReviewHeader>
            <ProfilePic src="/images/profile.svg" />
            <UserInfoContainer>
              <Image src="/icons/stars.svg" />
              <UsernameContainer>
                <Username>Ken T.</Username>
                <Image src="/icons/verified.svg" />
                <Verified>Verified Customer</Verified>
              </UsernameContainer>
            </UserInfoContainer>
          </ReviewHeader>
          <ReviewFooter>
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </ReviewFooter>
        </ReviewContainer>
      </LeftRow>
      <ProductDetailContainer>
        <ProductCardWrapper>
          <ProductImage
            src="/images/product-image-small.png"
            width={575}
            height={591}
          />
          <ProductInfoContainer>
            <ProductRateNameContainer>
              <ProductName>Clarifion Air Ionizer</ProductName>
              <ProductRateContainer>
                <ProductRateWas>$180</ProductRateWas>
                <ProductRateNow>$84</ProductRateNow>
              </ProductRateContainer>
            </ProductRateNameContainer>
            <Rating src="/icons/stars.svg" />
            <ProductStockInfoContainer>
              <Image src="/icons/dot.svg" />
              <ProductStockQuantity>12 left in stock</ProductStockQuantity>
            </ProductStockInfoContainer>

            <ProductText>
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </ProductText>
          </ProductInfoContainer>
        </ProductCardWrapper>

        <ProductAdvantagesList>
          <ProductAdvantagesListItem>
            <StyledBullets src="/icons/blue-tick.svg" />
            <span>
              Negative Ion Technology may{" "}
              <BoldText>help with allergens</BoldText>
            </span>
          </ProductAdvantagesListItem>

          <ProductAdvantagesListItem>
            <StyledBullets src="/icons/blue-tick.svg" />
            <span>
              Designed for <BoldText>air rejuvenation</BoldText>
            </span>
          </ProductAdvantagesListItem>

          <ProductAdvantagesListItem>
            <StyledBullets src="/icons/blue-tick.svg" />
            <span>
              <BoldText>Perfect for every room </BoldText>in all types of
              places.
            </span>
          </ProductAdvantagesListItem>
        </ProductAdvantagesList>
        <DiscountCardContainer>
          <Image src="/icons/percentage.svg" />
          <DiscountText>
            Save <DiscountTextBlue>53% </DiscountTextBlue>and get{" "}
            <DiscountTextBlue>6 extra Clarifision</DiscountTextBlue> for only{" "}
            <DiscountTextBlue>$14 Each</DiscountTextBlue>.
          </DiscountText>
        </DiscountCardContainer>
        <ClaimDiscountButton>
          Yes - Claim my discount
          <Image src="/icons/arrow.svg" />
        </ClaimDiscountButton>
        <ProductCardFooter>
          <ProductCardFooterPros>
            Free Shipping
            <ProductCardFooterSecurity>
              <Image src="/icons/lock-dark.svg" />
              Secure 256-bit SSL encryption
            </ProductCardFooterSecurity>
          </ProductCardFooterPros>
          <ProductCardPaymentMethods>
            <Image src="/icons/visa.svg" />
            <Image src="/icons/paypal.svg" />
            <Image src="/icons/gpay.svg" />
            <Image src="/icons/apple-pay.svg" />
            <Image src="/icons/amex.svg" />
            <Image src="/icons/mastercard.svg" />
            <Image src="/icons/shop-pay.svg" />
          </ProductCardPaymentMethods>
        </ProductCardFooter>

        <GuaranteeSection />
      </ProductDetailContainer>
      {/* <RejectLink>No thanks, I don’t want this.</RejectLink> */}
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${device.laptopL} {
    border-radius: 10px;
    background: #fafafa;
    padding: 40px;
  }
`;

const LeftRow = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    margin-bottom: 24px;
  }
`;
const StyledImage = styled(Image)`
  margin-bottom: 24px;
`;

const ReviewContainer = styled.div`
  display: flex;
  width: 575px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  border-radius: 10px;
  background: #fff;
`;

const ReviewHeader = styled.div`
  display: flex;
  gap: 13px;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 12px;
`;

const UserInfoContainer = styled.div``;

const UsernameContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Username = styled.div`
  color: #333;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 14px */
`;

const Verified = styled.span`
  color: #5bb59a;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
`;

const ReviewFooter = styled.p`
  color: #4d5254;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.laptop} {
    gap: 32px;
  }
`;

const ProductCardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
`;
const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: var(--text-blue);
  border-radius: 15px;

  @media ${device.laptop} {
    width: 134px;
    height: 134px;
  }
`;
const ProductRateNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductName = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  text-transform: capitalize;

  @media ${device.laptopL} {
    font-size: 20px;
  }
`;

const ProductRateContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const ProductRateWas = styled.div`
  color: var(--text-gray);
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
  text-transform: capitalize;
`;
const ProductRateNow = styled.div`
  color: var(--text-blue);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  text-transform: capitalize;
`;
const Rating = styled.img`
  width: 98px;
  height: 18px;
`;

const ProductText = styled.div`
  color: var(--text-gray);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  text-align: left;
  @media ${device.laptop} {
    text-align: center;
  }
`;

const ProductStockInfoContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ProductStockQuantity = styled.div`
  color: var(--text-gray);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const ProductAdvantagesList = styled.ul`
  margin: 0;

  &::marker {
    width: 16px;
    height: 16px;
  }
`;

const ProductAdvantagesListItem = styled.li`
  color: var(--text-gray);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */

  display: flex;
  gap: 12px;
`;

const StyledBullets = styled(Image)`
  width: 16px;
  height: 16px;

  @media ${device.laptop} {
    width: 22px;
    height: 22px;
  }
`;
const BoldText = styled.span`
  font-weight: 600;
`;

const DiscountCardContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 10px;
  background: #edf3fd;
`;

const DiscountText = styled.span``;

const DiscountTextBlue = styled.span`
  color: var(--text-blue);
`;

const ClaimDiscountButton = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 50px;
  background: var(--green);
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const ProductCardFooter = styled.div`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const ProductCardFooterPros = styled.div`
  color: var(--text-gray);
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  text-transform: capitalize;
  color: #cfcfcf;
`;

const ProductCardFooterSecurity = styled.div`
  flex: 1;
  border-left: 1px solid #cfcfcf;
  padding: 0 8px;
`;

const ProductCardPaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cfcfcf;
  gap: 2px;
  padding-top: 12px;

  width: 100%;
  @media ${device.laptop} {
    border-top: none;
    padding-top: 0;
    padding-left: 12px;
    width: auto;
    border-left: 1px solid #cfcfcf;
    height: 100%;
  }
`;

// const RejectLink = styled.a`
//   margin: 0 auto;
//   color: var(--red);
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
//   text-decoration-line: underline;
//   text-transform: uppercase;
//   text-align: center;
//   width: 80%;
// `;

export default ProductCard;
