import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './Submenu';

import Logo from './../../_assets/logo.png'

import './styles.css'

const Nav = styled.div`
  background: #CA973C;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const SidebarNav = styled.nav`
  background: #CA973C;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <Nav>
          <NavIcon to='#'>
          <img className="img-athlete" src={Logo} alt="Atleta" onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
            <img className="img-athlete" src={Logo} alt="Atleta" onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>

    </>
  );
};

export default Sidebar;