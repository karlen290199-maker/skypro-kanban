import PopUser from '../PopUser/PopUser';
import {
  HeaderBlock,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser
} from './Header.styled';

function Header({ toggleMenu, isOpen }) {
  return (
    <HeaderBlock>
      <div className="container">
        <HeaderContainer>
          <HeaderLogo className="_show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>

            <HeaderUser onClick={toggleMenu}>
              Ivan Ivanov
            </HeaderUser>

            <PopUser isOpen={isOpen} />
          </HeaderNav>
        </HeaderContainer>
      </div>
    </HeaderBlock>
  );
}

export default Header;