import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import img from './background-image.jpg'

export const HeaderStyled = styled.header`
    display: flex;
    gap: 50px;
    align-items: baseline;
    font-size: 18px;
    padding: 20px;
    background-color: #000;
    background-image: url('${img}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 20px;
    font-weight: 500;
    padding-top: 200px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;

  &.active {
    cursor: pointer;
    background-color: #000C66;
    border-radius: 4px;
  }
  
  &:hover, &:focus {
    border-radius: 4px;
    background-color: #000C66;
  }
`;
