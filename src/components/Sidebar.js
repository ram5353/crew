import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useMsal } from "@azure/msal-react";

const Nav = styled.div`
  background: #1c3d90;
  height: 80px;
  display: flex;
  overflow: hidden;
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
  background: #1c3d90;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  overflow: auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SignOutWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
  padding-right: 30px;
  text-decoration: none;
`;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  const { instance, accounts } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1 style={{ color: "white", paddingLeft: 20 }}>CREW</h1>
          <SignOutWrap>
            <h5 style={{paddingRight: 20, paddingTop:7, color: "white"}}>{accounts[0].name}</h5>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "22px",
              }}
              href="#0"
              onClick={() => handleLogout("popup")}
            >
              Sign out
            </a>
          </SignOutWrap>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Nav>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              <h1 style={{ color: "white", paddingLeft: 20 }}>CREW</h1>
            </Nav>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
