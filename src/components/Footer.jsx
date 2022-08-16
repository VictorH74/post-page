import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    text-align: center;
    margin-bottom: 10px;
    color: var(--primaryColor);
`;

const year = new Date().getFullYear()

export default function Footer() {
    return <Container> &copy; Create by Victor Hugo {year} </Container>
}