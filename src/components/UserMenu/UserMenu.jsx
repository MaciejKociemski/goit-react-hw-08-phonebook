import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import { Wrap } from './UserMenu.styled';
import { logOut } from '../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';

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
const AnimatedAvatar = styled(Avatar)`
  animation: ${pulseAnimation} 1s infinite;
`;

export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <AnimatedAvatar>{email.slice(0, 1).toUpperCase()}</AnimatedAvatar>
      <p>{email}</p>
      <Button type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </Button>{' '}
    </Wrap>
  );
};
