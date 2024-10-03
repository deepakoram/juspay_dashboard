import { Layout as AntLayout } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";
import NavBar from "../Components/NavBar";
import NotificationBar from "../Components/NotificationBar";
import { Outlet, useLocation } from "react-router-dom";
import SideMenuMobile from "../Components/SideMenuMobile";
import Loader from "../Components/Loader";

const { Sider, Header, Content } = AntLayout;

const Layout = () => {
  const path = useLocation();
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const dark = useSelector((state) => state.theme.value);
  return (
    timer ? 
    <Loader/> : <AntLayout style={{ height: "100vh" }}>
      <Sider className="side_menu">
        <SideMenu />
      </Sider>
      <Sider className="side_menu_mobile">
        <SideMenuMobile />
      </Sider>

      <AntLayout>
        <Header
          style={{ backgroundColor: "#fff", padding: 0 }}
          className="header_style"
          theme={!dark ? "light" : "dark"}
        >
          <NavBar />
        </Header>

        <Content style={{ overflow: "initial" }}>
          <div style={{ background: "#ffff", minHeight: "100%" }}>
            <Outlet />
          </div>
        </Content>
      </AntLayout>
      {path?.pathname === "/" && (
        <Sider className="notification_bar scroll_x" width={300}>
          <NotificationBar />
        </Sider>
      )}
    </AntLayout>
  );
};

export default Layout;
