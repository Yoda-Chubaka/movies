import styled from 'styled-components';
import {Link} from "react-router-dom";

export const SectionStyle = styled.section`
padding: 40px;
display: flex;
flex-direction: column;
gap: 20px;
color: #fff;
background-color: #101010;
`

export const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  padding: 6px;
  text-align: center;
  border: 1px solid #000C66;
  width: 100px;
  &.active {
    cursor: pointer;
  }
  
  &:hover, &:focus {
    border-radius: 4px;
    background-color: #000C66;
    color: #fff;
  }
`;

export const WrapStyle = styled.div`
display: flex;
gap: 20px;
`;

export const CardStyle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 400px;
`;

export const AddListStyle = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
font-weight: 500;
`;

export const LiStyle = styled.a`
color: #fff;
&.active {
    cursor: pointer;
    text-decoration: underline;
  
  }
  
  &:hover, &:focus {
    text-decoration: underline;
    
  }
`