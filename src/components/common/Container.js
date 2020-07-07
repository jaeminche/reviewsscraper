import React from "react";
import styled from "styled-components/macro";
import { mq } from "../responsiveUtil/device";
import palette from "../../lib/palette";

const paddingLR = mq({
  padding: [
    "60px 10px 40px 10px",
    "60px 20px 40px 20px",
    "60px 20px 40px 20px",
    "60px 160px 40px 160px",
    "60px 160px 40px 160px"
  ]
});
const paddingLR_menu = mq({
  padding: ["0 20px", "0 20px", "0 20px", "0 160px", "0 160px"]
});
const padding_insideFlexbox = mq({
  padding: ["60px 20px", "60px 20px", "60px 20px", "60px 20px", "60px 20px"]
});

const StyledContainer = styled.div`
  background: ${props => props.backgroundColor};
  ${props =>
    !!props.ismenu
      ? paddingLR_menu
      : (!!props.insideFlexbox && padding_insideFlexbox) || paddingLR};
  ${props => !!props.ismenu && `z-index: 10`};
  min-height: ${props => !props.ismenu && props.minHeight};
  ${props => !!props.insideFlexbox && `width: 320px; margin-left: 10px;`};
  ${props => !!props.ismenu && `max-height: 60px;`};
  z-index: ${props => (props.lowerContainer ? "1" : null)};
  padding-top: ${props => props.paddingTop};
  margin-bottom: ${props => !!props.marginBottom && props.marginBottom};
`;

const StyledImgContainer = styled.div`
  ${props =>
    !!props.ismenu
      ? paddingLR_menu
      : (!!props.insideFlexbox && padding_insideFlexbox) || paddingLR};
  background-image: url(${props => props.imgurl});
  min-height: ${props => !props.ismenu && props.minHeight};
  padding-top: ${props => props.paddingTop};
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const Container = ({
  imgurl = false,
  isfooter = false,
  withMainImg = false,
  insideFlexbox,
  ismobile,
  backgroundColor,
  minHeight,
  ismenu,
  paddingTop,
  marginBottom,
  buttonstyleda,
  children
}) => {
  // console.log("==010", buttonstyleda);
  return withMainImg ? (
    <StyledImgContainer
      imgurl={imgurl}
      isfooter={isfooter}
      withMainImg={withMainImg}
      insideFlexbox={insideFlexbox}
      ismobile={ismobile}
      backgroundColor={backgroundColor}
      minHeight={minHeight}
      ismenu={ismenu}
      paddingTop={paddingTop}
      marginBottom={marginBottom}
      buttonstyleda={buttonstyleda}
    >
      <div
        style={{ maxWidth: !ismobile ? "1200px" : "100vw", margin: "0 auto" }}
      >
        {children}
      </div>
    </StyledImgContainer>
  ) : (
    <StyledContainer
      isfooter={isfooter}
      withMainImg={withMainImg}
      insideFlexbox={insideFlexbox}
      ismobile={ismobile}
      backgroundColor={backgroundColor}
      minHeight={minHeight}
      ismenu={ismenu}
      paddingTop={paddingTop}
      marginBottom={marginBottom}
      buttonstyleda={buttonstyleda}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>{children}</div>
    </StyledContainer>
  );
};

export default Container;
