import { styled } from "styled-components";
import SpecialOfferSection from "./SpecialOfferSection";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <ProductSectionContainer>
      <SpecialOfferSection />
      <ProductCard />
    </ProductSectionContainer>
  );
};

const ProductSectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default ProductSection;
