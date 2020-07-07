import styled from "styled-components/macro";
// import { mq, device } from "components/responsiveUtil/device";

const Wrapper = styled.div`
  /* margin-top: 200px; */
`;

const StyledMaincopy = styled.div`
  margin-top: ${props => (props.ismobile ? "300px" : "450px")};
  height: 100%;
  text-align: left;
  h2 {
    font-size: ${props => (props.ismobile ? "30px" : "60px")};
    font-weight: bold;
    letter-spacing: -0.3px;
    color: white;
    width: 100%;
  }
  h3 {
    font-size: ${props => (props.ismobile ? "16px" : "24px")};
    font-weight: normal;
    letter-spacing: normal;
    color: white;
    width: 100%;
    /* margin-top: 5px; */
  }
`;

export { Wrapper, StyledMaincopy };
