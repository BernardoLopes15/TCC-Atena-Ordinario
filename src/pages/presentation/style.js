import styled from 'styled-components';
import './styles.css';

// export const Nav = styled.nav`
//   background: #44298;
//   height: 80px;
//   display: flex;
//   justify-content: flex-end;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
// `;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left:4.5rem;
  height: 100%;
  cursor: pointer;
  font-size:20px;
  &:hover {
    color:#f2c4f2;
    cursor: pointer;
  }
`;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const Div = styled.div`
  width: 100%;
  height:800px;
  background: rgb(188,158,255);
  background: linear-gradient(200deg, rgba(188,158,255,1) 13%, rgba(185,151,253,1) 45%, rgba(171,116,243,1) 81%);
  padding-top:80px;
`;

export const Main = styled.div`
  height: 700px;
  background-color: white;
`;

export const Section = styled.div`
  height: 700px;
  background-color: white;
`;

export const Footer = styled.div`
  height: 750px;
  background-color: #BC9EFF; 
`;

export const CardEntrar = styled.div`
  width: 500px;
  height: 600px;
  margin-left: 100px;
  text-align: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 230px;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  color: #9747FF;
  margin-top: 2.5rem;

  &:hover{
     border: solid 3px #9747FF;
  }
`;

export const Logo = styled.img`
  width: 450px;
  height: 400px;
`;

export const Subtitle = styled.p`
  color:  #fff;
  font-size: 22px;
  text-align: center;
  margin-top: -30px;
`;

export const Title = styled.h1`
 font-size: 30px;
 font-weight: bold;
`;

export const CardAbout = styled.div`
  heigth: 300px;
  width: 580px;
  position: absolute;
  margin-left: 700px;
  margin-top: 100px;
`;

export const CardProject = styled.div`
  heigth: 300px;
  width: 580px;
  position: absolute;
  margin-left: 100px;
  margin-top: 100px;
`;

export const TextContent = styled.p`
  margin-top: 40px;
  font-size: 20px;
`;


