import React from "react";
import Arrowup from "assets/arrow-upward.svg";
import { Button, Container } from "./styles";

export default function ArrowUp() {
  return (
    <Container>
      <Button onClick={() => window.location.replace("#")}>
        <img src={Arrowup} alt="arrow upward" />
      </Button>
    </Container>
  );
}
