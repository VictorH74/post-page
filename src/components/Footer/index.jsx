import React from "react";
import { Container } from "./styles";

const year = new Date().getFullYear();

export default function Footer() {
  return <Container> &copy; Create by Victor Hugo {year} </Container>;
}
