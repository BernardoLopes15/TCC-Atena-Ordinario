import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgb(3,1,9);
  background: linear-gradient(200deg, rgba(3,1,9,0.6) 47%, rgba(3,1,9,0.5) 71%);
  height: 100px;
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color:#f2c4f2;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const Div = styled.div`
  height:750px;
  background-color: #BC9EFF;
`;

export const Main = styled.div`
  height: 650px;
  background-color: white;
`;

export const Footer = styled.div`
  height: 750px;
  background-color: #BC9EFF;
`;

