import { Layout, Input, Menu, Breadcrumb } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggle } from "../Redux/Slices/themeSlice";
import { motion } from "framer-motion";
import sun from "../assets/sun.svg";
import sun_white from "../assets/sun_white.svg";
import clock from "../assets/clock.svg";
import clock_white from "../assets/clock_white.svg";
import bell from "../assets/bell.svg";
import bell_white from "../assets/bell_white.svg";
import book from "../assets/book.svg";
import book_white from "../assets/book_white.svg";
import star from "../assets/star.svg";
import star_white from "../assets/star_white.svg";
import command from "../assets/command.svg";
import search from "../assets/search.svg";

const { Header } = Layout;

const NavBar = () => {
  const dark = useSelector((state) => state.theme.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Header
      className={dark ? "black" : "white"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "0 20px",
        borderBottom: "1px solid #cbcdce",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={dark ? book_white : book} style={{ fontSize: "18px", marginRight: "15px" }} onClick={()=>navigate('/order-list')} />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={dark ? star_white : star} style={{ fontSize: "18px", marginRight: "15px" }} />
        </motion.div>

        <Breadcrumb>
          <Breadcrumb.Item><div style={{color:`${dark ? "grey" : "black"}`}}>Dashboards</div></Breadcrumb.Item>
          <Breadcrumb.Item><div style={{color:`${dark ? "white" : "black"}`}}>Default</div></Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Input
          placeholder="Search"
          prefix={<img src={search} />}
          suffix={<img src={command} />}
          style={{ background: `${dark ? "#333333" : "#f4f4f4"}`, width: "35%",border:"none" }}
        />

        <Menu
        className={dark ? "black" : "white"}
          mode="horizontal"
          selectable={false}
          style={{ borderBottom: "1px solid #cbcdce" }}
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Menu.Item
              key="sun"
              icon={<img src={dark ? sun_white : sun} />}
              onClick={() => dispatch(toggle())}
            />
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Menu.Item key="history" icon={<img src={dark ? clock_white : clock} />} />
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Menu.Item key="notification" icon={<img src={dark ? bell_white : bell} />} />
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Menu.Item key="dashboard" icon={<img src={dark ? book_white : book} />} onClick={()=>navigate('/order-list')} />
          </motion.div>
        </Menu>
      </div>
    </Header>
  );
};

export default NavBar;
