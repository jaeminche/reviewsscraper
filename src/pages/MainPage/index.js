import React from "react";
import Container from "../../components/common/Container";
import StyledLink from "../../components/common/StyledLink";
import { StyledMaincopy } from "./style";
import palette from "../../lib/palette";
import data from "../../lib/data";
import { Backgroundmain } from "../../assets";

const MainPage = ({ ismobile }) => {
  const Maincopy1 = data.maincopy1;
  const Maincopy2 = data.maincopy2;
  const Mainsubcopy1 = data.mainsubcopy1;
  const Mainsubcopy2 = data.mainsubcopy2;
  const Mainsubcopy3 = data.mainsubcopy3;
  return (
    <div
    // style={{ background: "palette.white" }}
    >
      <Container
        withMainImg
        ismobile={ismobile}
        minHeight={ismobile ? "80vh" : "1020px"}
        paddingTop={ismobile ? "40px" : "60px"}
        imgurl={Backgroundmain}
      >
        <StyledMaincopy ismobile={ismobile}>
          <div style={{ marginBottom: "20px" }}>
            <h2>{Maincopy1}</h2>
            <h2>{Maincopy2}</h2>
          </div>
          <div>
            <h3>{Mainsubcopy1}</h3>
            <h3>{Mainsubcopy2}</h3>
            <h3>{Mainsubcopy3}</h3>
          </div>
        </StyledMaincopy>
      </Container>
    </div>
  );
};

export default MainPage;
