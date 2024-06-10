import React from "react";
import { DisclaimerContainer, Sup } from "../styles/DisclaimerContainer";

function Disclaimer({ text, sup }) {
  return (
    <DisclaimerContainer>
      {sup && <Sup>{sup}</Sup>}
      {text}
    </DisclaimerContainer>
  );
}

export default Disclaimer;
