import React from "react";
import styled from "styled-components/macro";
// import { useDispatch } from "react-redux";
// import { sideOpen } from "store/main";

const Group = styled.div`
  width: 18px;
  height: 12px;
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: ${props => (props.ismobile ? "13px" : "160px")};
  color: white;
  z-index: 50;
`;

const Line = styled.span`
  display: block;
  height: 2px;
  width: 18px;
  background: #2b2b2b;
  border-radius: 0px;
  position: absolute;
  color: white !important;

  &:first-child {
    margin-top: -1px;
  }

  &:nth-child(2) {
    top: 5px;
    margin-top: -1px;
    width: 12px;
    left: 6px;
  }
  &:nth-child(3) {
    top: 10px;
    margin-top: -1px;
    width: 8px;
    left: 10px;
  }
`;

const Hamburger = ({ ismobile }) => {
  // const dispatch = useDispatch();

  return (
    <Group ismobile={ismobile}>
      <Line />
      <Line />
      <Line />
    </Group>
  );
};

export default Hamburger;
