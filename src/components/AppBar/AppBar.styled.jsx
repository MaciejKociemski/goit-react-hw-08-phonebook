import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IssuesCloseOutlined, LoginOutlined } from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 5px;
  }
  &.active {
    color: #3a97e8;
    border-bottom: 3px solid #3a97e8;
    padding: 5px;
  }
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
`;

export const RegIcon = styled(IssuesCloseOutlined)`
  margin-right: 8px;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 480px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;
