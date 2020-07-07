import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  min-height: 105px;
  margin-top: ${props => !!props.margintop && props.margintop};
  /* margin: 0px auto;
  max-width: inherit;
  width: 100%; */
  /* bottom: 0; */
  /* right: ${props => (props.ismobile ? "20px" : "0")}; */
  /* bottom: 40px; */
  /* width: ${props => (props.ismobile ? `calc(100% - 40px)` : "320px")}; */
`;

const StyledLink = styled(Link)`
font-family: Montserrat;
  font-size: 30px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;

  padding-left: inherit;
  padding-right: inherit;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 65px;

  position: absolute;
  right: 0;
  /* right: ${props => (props.ismobile ? "20px" : "0")}; */
  top: 40px;
  width: ${props => (props.ismobile ? `100%` : "320px")};
  /* width: ${props => (props.ismobile ? `calc(100% - 40px)` : "320px")}; */

  /* background: rgb(17, 17, 17);
  color: white; */
`;

export default props => (
  <Wrapper {...props}>
    <StyledLink {...props} />
  </Wrapper>
);
