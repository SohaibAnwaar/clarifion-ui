/**
 * This js contains the breakpoint variables for responsive stylings
 */
export const size = {
  mobile: "374px",
  mobileL: "576px",
  tablet: "768px",
  tabletL: "992px",
  laptop: "1024px",
  laptopM: "1200px",
  laptopL: "1400px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
};

//Usage Example
// @media ${device.laptop} {
//     min-width: 800px;
// }
