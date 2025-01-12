import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag"></Icon>
            <VisuallyHidden>Open shopping bag</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search"></Icon>
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu"></Icon>
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>

        </MobileActions>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 4px solid ${COLORS.gray[900]};

  @media ${QUERIES.tabletAndSmaller}{
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller}{
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  gap: 3vw;
  
  @media ${QUERIES.tabletAndSmaller}{
    display: flex;
  }
`

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller}{
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller}{
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
