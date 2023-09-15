import styled from "styled-components";
import { size } from "../styles/Breakpoint";
import { SetStateAction, useEffect, useState } from "react";

interface ChevronProps {
  disabled: boolean;
}

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(
    window.innerWidth >= +size.tabletL.replace("px", "") ? true : false
  );
  const headerData = [
    {
      path: "/icons/check-badge.svg",
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      path: "/icons/truck.svg",
      text: "FREE DELIVERY ON ORDERS OVER $40.00",
    },
    {
      path: "/icons/heart.svg",
      text: "50.000+ HAPPY CUSTOMERS",
    },
    {
      path: "/icons/sync-checkmark.svg",
      text: "100% MONEY BACK GUARANTEE",
    },
  ];

  const handleResize = () => {
    window.innerWidth >= +size.tabletL.replace("px", "")
      ? setIsOpen(true)
      : setIsOpen(false);
  };

  const isFirstIndex = currentIndex === 0;
  const isLastIndex = currentIndex === headerData.length - 1;

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      <StyledSlider>
        <SliderWrapper>
          {!isOpen ? (
            <>
              <LeftChevron
                src="/icons/chevron-left.svg"
                onClick={() => {
                  !isFirstIndex && setCurrentIndex(currentIndex - 1);
                  console.log("currentIndex", currentIndex);
                }}
                disabled={isFirstIndex}
              />
              <StyledSlide>
                <Icon src={headerData[currentIndex].path} />
                <Text>{headerData[currentIndex].text}</Text>
              </StyledSlide>

              <RightChevron
                src="/icons/chevron-right.svg"
                onClick={() => {
                  console.log("currentIndex", !isLastIndex);
                  !isLastIndex && setCurrentIndex(currentIndex + 1);
                }}
                disabled={isLastIndex}
              />
            </>
          ) : (
            <>
              {headerData.map((item, index) => (
                <StyledSlide key={index}>
                  <Icon src={item.path} />
                  <Text>{item.text}</Text>
                </StyledSlide>
              ))}
            </>
          )}
        </SliderWrapper>
      </StyledSlider>
    </>
  );
};

const StyledSlider = styled.div`
  padding: 10px 0;
  background-color: var(--bg-color);
  color: white;
  display: flex;
  justify-content: space-between;
  /* justify-content: space-around; */
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Icon = styled.img``;

const Text = styled.span`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */
  text-transform: capitalize;
`;

const LeftChevron = styled.img<ChevronProps>`
  ${(props) => props.disabled && "opacity: 0.5;"}
`;

const RightChevron = styled.img<ChevronProps>`
  ${(props) => props.disabled && "opacity: 0.5;"}
`;

export default Header;
