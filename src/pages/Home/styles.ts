import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e4d4a4;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  .description {
    width: 60%;

    font-weight: 600;
    font-family: "Quicksand", sans-serif;

    .welcome {
      font-size: 20px;
    }
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Quicksand", sans-serif;
    font-size: 80px;
    font-weight: 600;
    letter-spacing: 4px;
    color: #cc6d31;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    h1 {
      font-size: 30px;
    }
    img {
      width: 70px;
      height: 75px;
    }
  }
`;

const Button = styled.button`
  height: 40px;
  background-color: #cc6d31;

  margin: 30px 10px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;

  border-radius: 8px;
  border: none;

  cursor: pointer;
  transition: all 0.6s ease-in-out;

  svg {
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: #cc6d31;
    font-weight: 600;

    svg {
      color: #cc6d31;
      fill: #cc6d31;
    }
  }

  :focus {
    outline-style: none;
  }
`;

export { Container, Header, Button };
