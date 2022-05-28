import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import Card from "../Card";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SlideTwo = () => (
  <SContainer>
    <Card />
  </SContainer>
);

export default SlideTwo;
