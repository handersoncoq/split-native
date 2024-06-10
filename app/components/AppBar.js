import React from "react";
import styled from "@emotion/native";

const TopBar = styled.View`
  position: absolute;
  top: 0;
  // left: 0;
  // width: 100%;
  height: 32px;
  margin-horizontal: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const BarContainer = styled.View`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: visible;
`;

const SkewedBar = styled.View`
  position: absolute;
  top: 0;
  height: 100%;
  width: 105%; /* Make sure it's wide enough to cover the gap */
  background-color: ${(props) => props.color};
  transform: skewX(${(props) => props.skew});
`;

const LeftBar = styled(SkewedBar)`
  left: -10%; /* Adjust to control the gap */
`;

const RightBar = styled(SkewedBar)`
  right: -10%; /* Adjust to control the gap */
  transform: skewX(
    ${(props) => `-${props.skew}`}
  ); /* Skew in the opposite direction */
`;

function AppBar() {
  return (
    <TopBar>
      <BarContainer>
        <LeftBar color="#1DA1F2" skew="-20deg" />
      </BarContainer>
      <BarContainer>
        <RightBar color="cyan" skew="-20deg" />
      </BarContainer>
    </TopBar>
  );
}

export default AppBar;
