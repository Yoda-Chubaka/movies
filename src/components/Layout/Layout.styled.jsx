import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
    display: flex;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,61,62,1) 52%, rgba(0,212,255,1) 100%);
    gap: 50px;
    align-items: baseline;
    font-size: 18px;
    padding: 20px;
    border: 2px solid radial-gradient(circle, rgba(2,0,36,1) 64%, rgba(91,91,92,1) 100%, rgba(0,212,255,1) 100%);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 20px;
    font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
  color: #75E6DA;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;


  &.active {
    cursor: pointer;
    background-color: #000C66;
    color: #75E6DA;
    border-radius: 4px;
  }
  
  &:hover, &:focus {
    border-radius: 4px;
    background-color: #000C66;
    color: #75E6DA;
  }
`;
