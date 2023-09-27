import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavbarInterface {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

//#region Styled components

const StyledNavbar = styled("nav")`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${process.env.REACT_APP_NAVBAR_HEIGHT};
  margin-bottom: ${process.env.REACT_APP_NAVBAR_BOTTOM_SPACING};
`;

const StyledRightLinkWrapper = styled("ul")`
  padding: 4px;
  display: flex;
`;

const StyledLeftLinkWrapper = styled("ul")`
  padding: 4px;
  display: flex;
`;

const StyledLink = styled(NavLink)`
  &.active {
    color: white;
  }
  &.pending {
    border: 10px solid white;
  }
  transition: all 0.5s ease;
  text-decoration: none;
  margin: 0 20px;
  font-size: 14px;
  font-weight: 500;
  color: #696969;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: white;
  }
`;
//#endregion

const Navbar: React.FC<NavbarInterface> = ({ isLoggedIn, handleLogout }) => {
  return (
    <StyledNavbar>
      <StyledLeftLinkWrapper>
        <StyledLink
          className={({ isActive, isPending }) =>
            isPending ? "pendingLink" : isActive ? "active" : ""
          }
          to="/"
        >
          Home
        </StyledLink>
        <StyledLink className="activeLink" to="/gallery">
          Gallery
        </StyledLink>
        <StyledLink className="activeLink" to="/notes">
          Notes
        </StyledLink>
        <StyledLink className="activeLink" to="/Summon">
          Summon
        </StyledLink>
        <StyledLink className="activeLink" to="/library">
          Library
        </StyledLink>
        <StyledLink className="activeLink" to="/about">
          About
        </StyledLink>
      </StyledLeftLinkWrapper>
      <StyledRightLinkWrapper>
        {isLoggedIn ? (
          <StyledLink className="activeLink" to="/" onClick={handleLogout}>
            Logout
          </StyledLink>
        ) : (
          <>
            <StyledLink className="activeLink" to="/signup">
              Signup
            </StyledLink>
            <StyledLink className="activeLink" to="/login">
              Login
            </StyledLink>
          </>
        )}
      </StyledRightLinkWrapper>
    </StyledNavbar>
  );
};
export default Navbar;
