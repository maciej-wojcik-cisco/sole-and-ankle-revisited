/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';



const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close"></Icon>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler></Filler>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: hsl(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Filler = styled.div`
  flex: 1;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
`

export default MobileMenu;
