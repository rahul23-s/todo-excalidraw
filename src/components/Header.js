import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <a href="/">
        <Logo href="/">ToDo | ExcaliDraw</Logo>
      </a>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 39px;
  letter-spacing: 10px;
  z-index: 3;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  padding: 0;
  width: fit-content;
  height: 50px;
  border: 3px ridge #ffffff;
  margin-top: 6px;
  max-height: 70px;
  font-size: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 3.5 rem;
  }
`;

export default Header;
