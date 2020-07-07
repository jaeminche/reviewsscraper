import styled from "styled-components/macro";
// import { mq, device } from "components/responsiveUtil/device";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: white;
`;

const SelectLang = styled.div`
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: white;
  margin-right: 40px;
`;

export { Nav, SelectLang };
