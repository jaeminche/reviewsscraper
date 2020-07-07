import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
// import palette from "../../lib/palette";
import {
  DesktopLink,
  DesktopContent,
  Label,
  FlexBox,
  TopBox,
  Title,
  Text
} from "./style";
import data from "../../lib/data";
import palette from "../../lib/palette";

const Footer = ({ ismobile, isDesktop }) => {
  const D = data.footer;
  return (
    <Container
      isfooter
      ismobile={ismobile}
      backgroundColor={palette.footerbackground}
      minHeight="260px"
      paddingTop="40px"
      marginBottom="0"
    >
      <div
        style={{
          padding: isDesktop ? "1.4166rem 0" : "1rem 10px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: palette.footerbackground,
          width: "100%"
        }}
      >
        <div>
          <DesktopLink ismobile={ismobile} isDesktop={isDesktop}>
            <Link to="/intro">Intro</Link>
            <div
              style={{
                color: palette.footer
              }}
            >
              |
            </div>
            <Link to="/term">Terms</Link>
            <div
              style={{
                color: palette.footer
              }}
            >
              |
            </div>
            <Link to="/privacy">Privacy</Link>
            <div
              style={{
                color: palette.footer
              }}
            >
              |
            </div>
            <Link to="/disclaimers">Disclaimer</Link>
          </DesktopLink>
          <DesktopContent ismobile={ismobile} isDesktop={isDesktop}>
            <div style={{ textAlign: "center" }}>
              <Label
                style={{
                  marginRight: "8px"
                }}
                title={!isDesktop ? "true" : "false"}
              ></Label>
              <Label
                style={{
                  marginRight: isDesktop ? "15px" : "10px"
                }}
              ></Label>

              <Label
                style={{
                  marginRight: "8px"
                }}
                title={!isDesktop ? "true" : "false"}
              >
                Built by
              </Label>
              <Label
                style={{
                  marginRight: isDesktop ? "15px" : "10px"
                }}
              >
                Jae M. Choi
              </Label>
              {/* <Label
                style={{
                  marginRight: "8px"
                }}
                title={!isDesktop ? "true" : "false"}
              >
                주소
              </Label>
              <Label
                style={{
                  marginRight: "8px"
                }}
              >
                서울시 강남구 광평로56길 10 4층
              </Label>
              <Label
                style={{
                  marginRight: "8px"
                }}
                title={!isDesktop ? "true" : "false"}
              >
                사업자등록번호
              </Label>
              <Label
                style={{
                  marginRight: isDesktop ? "15px" : "10px"
                }}
              >
                XXX-XX-XXXXX
              </Label> */}
              {isDesktop ? (
                <div
                  style={{
                    textAlign: "center"
                  }}
                >
                  {/* <Label
                    style={{
                      marginRight: "8px"
                    }}
                    title={!isDesktop ? "true" : "false"}
                  >
                    대표전화
                  </Label>
                  <Label
                    style={{
                      marginRight: isDesktop ? "15px" : "10px"
                    }}
                  >
                    02-561-2708
                  </Label> */}

                  <Label
                    style={{
                      marginRight: "8px"
                    }}
                    title={!isDesktop ? "true" : "false"}
                  >
                    Email
                  </Label>
                  <Label
                    style={{
                      marginRight: "8px"
                    }}
                  >
                    jaeminche@gmail.com
                  </Label>
                  {/* <Label>Copyright ⓒ Yulon. all rights reserved</Label> */}
                </div>
              ) : (
                <span>
                  <Label
                    style={{
                      marginRight: "8px"
                    }}
                    title={!isDesktop ? "true" : "false"}
                  >
                    Email
                  </Label>
                  <Label>jaeminche@gmail.com</Label>
                </span>
              )}
            </div>
          </DesktopContent>
        </div>
      </div>

      {/* <FlexBox>
        <Title>{D.title}</Title>
        <TopBox>TOP</TopBox>
      </FlexBox>
      {D.texts.map((item, key) => (
        <Text key={key}>{item}</Text>
      ))}
      <Text style={{ marginTop: "14px" }}>{D.copyright}</Text> */}
    </Container>
  );
};

export default Footer;
