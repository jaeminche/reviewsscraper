import facepaint from "facepaint";

// device sizes reference from Bootstrap
// sm, md, lg, xl (576, 768, 992, 1200)

// 다음은 for react-responsive
const deviceSize = {
  // mobile: 575,
  // mobileL: 576,
  mobile: 567,
  mobileL: 568,
  tablet: 768,
  tabletL: 992,
  desktop: 1200
};

// size와 device는 커스텀메이드 한 쌍
const size = {
  // mobile: "575px",
  // mobileL: "576px",
  mobile: "567px",
  mobileL: "568px",
  tablet: "768px",
  tabletL: "992px",
  desktop: "1200px"
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`
};

const mq = facepaint([
  // Note that the first value is considered a default value and is not a child of a media query at-rule.
  `@media(min-width: ${size.mobileL})`,
  `@media(min-width: ${size.tablet})`,
  `@media(min-width: ${size.tabletL})`,
  `@media(min-width: ${size.desktop})`
]);

export { mq, deviceSize, device, size };
