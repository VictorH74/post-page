import styled from "styled-components";

export const Container = styled.div`
  backdrop-filter: blur(20px);
  border: 1px solid var(--primaryColor);
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  width: 80%;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.2);
  animation: ${({ isArtificial }) =>
    isArtificial ? "newComment ease-in-out 170ms " : ""};

  @media (max-width: 500px) {
    width: 100%;
  }
  @keyframes newComment {
    from {
      transform: translateY(-30%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
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
    text-align: center;
    font-weight: lighter;
    font-style: italic;
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  line-height: 23px;
`;

export const DeleteBtn = styled.button`
  color: var(--primaryColor);
`;
