import styled from "styled-components";

export const Container = styled.div`
  backdrop-filter: blur(20px);
  border: 1px solid var(--primaryColor);
  border-radius: 15px;
  padding: 15px;
  width: 80%;
  margin: 20px auto;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.4);

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--primaryColor);
  margin-bottom: 20px;
`;

export const Bottom = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  & button {
    margin-right: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Inf = styled.h2`
  &.user {
    font-weight: lighter;
    font-size: 1.4rem;
  }
  &.moment {
    font-weight: lighter;
    font-style: italic;
    font-size: 1.2rem;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
`;

export const Text = styled.p`
  line-height: 23px;
`;

export const Comments = styled.div`
  width: 80%;
  margin: 40px auto;
  @media (max-width: 500px) {
    width: 95%;
  }
`;