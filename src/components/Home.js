import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container>
        <Buttons>
          <a
            className="todoButton"
            href="/todo"
            style={{ borderRight: "2px solid #ffffff" }}
          >
            <h5>Todo</h5>
            <i className="fas fa-clipboard-list"></i>
          </a>
          <a
            className="drawButton"
            href="/draw"
            style={{ borderLeft: "2px solid #ffffff" }}
          >
            <h5>Draw</h5>
            <i className="fas fa-paint-brush"></i>
          </a>
        </Buttons>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
  background-image: linear-gradient(
    109.6deg,
    rgba(48, 207, 208, 1) 11.2%,
    rgba(51, 8, 103, 1) 92.5%
  );
`;

const Buttons = styled.div`
  height: calc(100% - 100px);
  width: 90%;
  margin-top: 70px;
  border-radius: 30px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .todoButton {
    color: #31abbd;
  }
  .drawButton {
    color: #324d8c;
  }

  a {
    width: 50%;
    height: 100%;
    display: flex;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    transition: 200ms;
    h5 {
      font-size: 4rem;
    }
    i {
      font-size: 100px;
    }

    &:hover {
      background: linear-gradient(to right, #3498db, #2c3e50);
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

export default Home;
