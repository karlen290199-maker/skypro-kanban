import { HeaderPopUserSet } from '../Header/Header.styled';
import styled from 'styled-components';

const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  cursor: pointer;
  margin: 0 auto;
  display: block;

  a {
    color: #565EEF;
  }

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }

  &:hover a {
    color: #FFFFFF;
  }
`;

function PopUser({ isOpen }) {
  return (
    <HeaderPopUserSet isOpen={isOpen}>
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <LogoutButton type="button">
        <a href="#popExit">Выйти</a>
      </LogoutButton>
    </HeaderPopUserSet>
  );
}

export default PopUser;