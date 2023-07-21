import styled, { keyframes } from 'styled-components';
import { ContactsOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import img from '../../img/backgroundPicture.jpg';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: #444;
`;

export const Wrap = styled.div`
  margin-bottom: 100px;
  padding: 20px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const UnderTitle = styled.h2`
  color: #444;
  font-size: 20px;
  text-align: center;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 2px 2px 2px rgb(5 145 255 / 10%);
  border-radius: 5px;
  padding: 5px 8px;
  background-color: #2577ff;
  font-weight: 400;
  font-size: 18px;
  :hover {
    opacity: 0.8;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.95)
    ),
    url(${img});
  border-radius: 1em;
  background-position: center;
  //   background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeContactList = styled(ContactsOutlined)`
  svg {
    color: #2777ff;
    width: 120px;
    display: block;
    height: 220px;
    margin: 0 auto;
    animation: ${pulseAnimation} 2s infinite;
  }
`;
