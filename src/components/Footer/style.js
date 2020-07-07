import styled from "styled-components/macro";
// import { mq, device } from "components/responsiveUtil/device";
import { mq } from "../responsiveUtil/device";
import palette from "../../lib/palette";

const fontSize = mq({
  fontSize: ["0.1rem", "0.1rem", "0.1rem", "0.5833rem", "0.5833rem"]
});
const margin = mq({
  margin: [
    "0.125rem 9px",
    "0.125rem 9px",
    "0.125rem 9px",
    "0.125rem 9px",
    "0.125rem 18px"
  ]
});
const marginTop = mq({
  marginTop: ["0.625rem", "0.625rem", "0.625rem", "0.4166rem", "0.4166rem"]
});

const DesktopLink = styled.div`
  ${props =>
    props.hostname === "B"
      ? `width: ${props => (props.isMobile ? "100%" : "700px")}`
      : `width: ${props => (props.isMobile ? "100%" : "396px")}`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a,
  div {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;
    color: ${palette.footer};
  }
  div {
    ${margin}
    line-height: 0.25rem;
  }
`;

const DesktopContent = styled.div`
  max-width: 1200px;
  ${props =>
    props.hostname === "B"
      ? `width: ${props => (props.isMobile ? "100%" : "700px")}`
      : `width: ${props => (props.isMobile ? "100%" : "396px")}`};
  ${marginTop}
  ${props => !props.isMobile && `padding: 0;`}
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.hostname === "R" || props.hostname === "B" ? "left" : "center"};
  align-items: ${props =>
    props.hostname === "R" || props.hostname === "B" ? "left" : "center"};
  opacity: 0.5;
  div {
    ${props => props.hostname === "B" && margin};
    line-height: 0.2rem;
    align-items: ${props =>
      props.hostname === "R" || props.hostname === "B" ? "left" : null};
  }
  span {
    font-size: ${props =>
      props.hostname === "R"
        ? "10px"
        : props.hostname === "B"
        ? "14px"
        : "14px"};
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    /* letter-spacing: -0.2px; */
    text-align: ${props =>
      props.hostname === "R" || props.hostname === "B" ? "left" : "center"};
  }
`;

const Label = styled.span`
  color: ${palette.footer};
  letter-spacing: -1px;
`;

// const FlexBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: ${props => (!props.isMobile ? "0 20px" : "none")};
// `;

// const TopBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 66px;
//   height: 40px;
//   opacity: 0.5;
//   border: solid 1px rgba(255, 255, 255, 0.6);

//   opacity: 0.5;
//   font-family: NotoSansCJKkr;
//   font-size: 14px;
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: -0.2px;
//   text-align: center;
//   color: rgb(240, 241, 244);
// `;

const Title = styled.h1`
  /* font-family: Montserrat; */
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin: 0;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 64px;
  opacity: 0.5;
  border: solid 1px white;

  opacity: 0.5;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;
  color: ${palette.footer};
`;

const Text = styled.div`
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: ${palette.footer};
  margin-top: 3px;
`;

export { DesktopLink, DesktopContent, Label, FlexBox, TopBox, Title, Text };
