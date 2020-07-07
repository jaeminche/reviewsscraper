import React from "react";
import { Link } from "react-router-dom";
import { Nav, SelectLang } from "./style";
import { Hamburger, Logomain } from "../../assets";
// import { Hamburger } from "components";
import Container from "../common/Container";
import palette from "../../lib/palette";

const Navbar = ({ ismobile }) => (
  <Container ismobile={ismobile} backgroundColor={palette.white} ismenu>
    <Nav>
      <Link
        style={{
          color: palette.blacktext,
          background: palette.white,
          textDecoration: "none"
        }}
        to="/index.html"
      >
        <img style={{ height: "32px" }} src={Logomain} alt="메인로고" />
      </Link>
      <div style={{ display: "flex" }}>
        {!ismobile && (
          <>
            <SelectLang style={{ color: palette.blacktext }}>Intro</SelectLang>
          </>
        )}
        <img src={Hamburger} alt="햄버거" />
      </div>

      {/**      <Hamburger ismobile={ismobile} />*/}
    </Nav>
  </Container>
);

export default Navbar;
