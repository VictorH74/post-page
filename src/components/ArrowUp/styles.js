import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
  border-radius: 100%;
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 60px;
  width: 60px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.568);
  z-index: 9999;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  & img {
    margin-bottom: -4px;
  }
`;
