import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { MenuOutlined } from "@ant-design/icons";
import { toggle } from "../Redux/Slices/themeSlice";
import sun from "../assets/sun.svg";
import sun_white from "../assets/sun_white.svg";
import menuItemsData from "../Data/sideMenu.json";
import defaultIcon from "../assets/default.svg";
import defaultIcon_white from "../assets/default_white.svg";
import ecommerceIcon from "../assets/ecommerce.svg";
import ecommerceIcon_white from "../assets/ecommerce_white.svg";
import projects from "../assets/projects.svg";
import projects_white from "../assets/projects_white.svg";
import courses from "../assets/online_course.svg";
import courses_white from "../assets/courses_white.svg";
import user from "../assets/user.svg";
import profile from "../assets/user_profile.svg";
import profile_white from "../assets/user_profile_white.svg";
import account from "../assets/account.svg";
import account_white from "../assets/account_white.svg";
import corporate from "../assets/corporate.svg";
import corporate_white from "../assets/corporate_white.svg";
import blog from "../assets/blog.svg";
import blog_white from "../assets/blog_white.svg";
import social from "../assets/social.svg";
import social_white from "../assets/social_white.svg";
import menu_arrow from "../assets/menu_arrow.svg";
import menu_arrow_white from "../assets/menu_arrow_white.svg";
import menu_dot from "../assets/menu_dot.svg";



const SideMenuMobile = () => {
  const dark = useSelector((state) => state.theme.value)
  const dispatch = useDispatch();

  
  const [current, setCurrent] = useState("1");
  const [visible, setVisible] = useState(false);
  const iconMapper = {
    default: dark ? defaultIcon_white : defaultIcon,
      ecommerce: dark ? ecommerceIcon_white : ecommerceIcon,
      projects : dark ? projects_white : projects,
      courses : dark ? courses_white : courses,
      profile : dark ? profile_white : profile,
      account : dark ? account_white : account,
      corporate : dark ? corporate_white : corporate,
      blog : dark ? blog_white : blog,
      social : dark ? social_white : social,
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.children) {
        return {
          ...item,
          icon: <div><img src={dark ? menu_arrow_white : menu_arrow} style={{marginRight:"10px"}}/><img src={iconMapper[item.icon]} alt="Menu item" /></div>,
          children: renderMenuItems(item.children),
        };
      }
      return {
        ...item,
      };
    });
  };

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <div>
      <Button
        type=""
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      />

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <div
         className={dark ? "black space_between" : "white space_between"}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            background: "white",
            borderBottom: "1px solid #cbcdce",
          }}
        >
          <div className="align_center">

          <img
            src={user}
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />
          <div className="regular_14">Deepak Oram</div>
          </div>
        <img src={dark ? sun_white : sun} onClick={() => dispatch(toggle())}/>
        </div>
        <div
         className={dark ? "black" : "white"}
         style={{
          display: "flex",
          alignItems: "start",
          padding: "16px",
          background: "white",
          flexDirection:"column"
        }}>
        <div style={{width:"80%"}} className="space_between">
          <div className="regular_14" style={{color:"f4f4f4"}}>Favorites</div>
          <div className="regular_14" style={{color:"f4f4f4"}}>Recently</div>
        </div>
        <div style={{width:"100%"}}>
        <ul style={{padding:"0",listStyle:"none"}} className="align_center_column">
          <li className="regular_14" style={{marginBottom:"10px", marginTop:"10px"}}><img src={menu_dot}/>Overview</li>
          <li className="regular_14" style={{marginBottom:"10px"}}><img src={menu_dot}/>Projects</li>
        </ul>
        </div>
      </div>
        <Menu
         className={dark ? "black" : "white"}
          theme="light"
          onClick={onClick}
          style={{
            width: "100%",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            fontFamily: "Inter",
          }}
          defaultOpenKeys={["sub5"]}
          selectedKeys={[current]}
          mode="inline"
          items={renderMenuItems(menuItemsData)}
        />
      </Drawer>
    </div>
  );
};

export default SideMenuMobile;
