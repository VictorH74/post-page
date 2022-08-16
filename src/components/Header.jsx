import React from "react";
import styled from "styled-components";

const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--primaryColor);
    height: 60px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.61);
    padding: 5px;
    color: whitesmoke;
`;

export default function Header() {
    return (
        <Container>
            <h1>VH | Postagem</h1>
        </Container>
    );
}