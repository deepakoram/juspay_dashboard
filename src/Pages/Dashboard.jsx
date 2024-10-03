import { Card, Col, Row, Flex, Progress } from "antd";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ProjectionsBarChart from "../Components/BarChart";
import RevenueLineChart from "../Components/LineChart";
import map from "../assets/map.svg";
import "./style.scss";
import DonutChart from "../Components/DonutCharts";
import TopSellingProducts from "../Components/TopSellingProduct";
import up_arrow from "../assets/up_arrow.svg";
import up_white_arrow from "../assets/up_white_arrow.svg";
import down_arrow from "../assets/down_arrow.svg";
import down_white_arrow from "../assets/down_white_arrow.svg";

const Dashboard = () => {
  const dark = useSelector((state) => state.theme.value);
  const cardStyle = {
    borderRadius: "12px",
    textAlign: "left",
    padding: "16px",
    height: "100%",
  };

  const data = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      icon: <img src={up_arrow} />,
      bgColor: "#E6F7FF",
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      icon: <img src={dark ? down_white_arrow : down_arrow} />,
      bgColor: dark ? "#272727" :"#F7F9FB",
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      icon: <img src={dark ? up_white_arrow : up_arrow} />,
      bgColor:dark ? "#272727" : "#F0F5FF",
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      icon: <img src={up_arrow} />,
      bgColor: "#E6F7FF",
    },
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <div className={`${dark ? "black" : "white"} dashboard scroll_x padding`} >
      <Col span={24} className="semibold_14">
        eCommerce
      </Col>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ padding: "0" }}
      >
        {/* 1st row --------------------------------------------------------- */}
        <Row gutter={[25, 25]} className="margin_top">
          <Col xs={24} md={12} sm={24} style={{ height: "auto" }}>
            <Row gutter={[16, 16]}>
              {data.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={12}>
                 <motion.div
                 key={index}
                 className="box"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                  <Card style={{ ...cardStyle, backgroundColor: item.bgColor, border:"none" , color:`${dark ? "white" : "black"}` }}>
                    <div className="semibold_14" style={{color:`${dark && index === 1 || dark && index === 2 ? "white" : "black"}` }}>{item.title}</div>
                    <div className="space_between">
                      <div className="semibold_24" style={{color:`${dark && index === 1 || dark && index === 2 ? "white" : "black"}` }}>{item.value}</div>
                      <div className="regular_12 align_center" style={{color:`${dark && index === 1 || dark && index === 2 ? "white" : "black"}` }}>
                        <span>{item.change}</span>
                        <span style={{ marginLeft: "5px", color:`${dark && index === 1 || dark && index === 2 ? "white" : "black"}` }} >{item.icon}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            xs={24}
            md={12}
            sm={24}
            className={dark ? "grey border-style" : "border-style"}
          >
            <Col className="semibold_14" style={{color: `${dark ? "white" : "black"}`}}>Projections vs Actuals</Col>
            <ProjectionsBarChart />
          </Col>
        </Row>

        {/* 2nd row --------------------------------------------------------- */}
        <Row gutter={[30, 30]} className="margin_top">
          <Col
            xs={24}
            lg={17}
            md={24}
            sm={24}
            className={dark ? "grey border-style margin_right" : "border-style margin_right"}
          >
            <RevenueLineChart />
          </Col>

          <Col xs={24} lg={6} md={24} sm={24} className={dark ? "grey border-style" : "border-style"}>
            <Col className="flex_center_column">
              <div className="semibold_14" style={{color: `${dark ? "white" : "black"}`}}>Revenue by Location</div>
              <img src={map} alt="Map" />
              <Flex vertical style={{ width: "100%" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="space_between">
                    <div className="regular_12">New York</div>
                    <div className="regular_12">72K</div>
                  </div>
                  <Progress
                    percent={72}
                    strokeColor="#A8C5DA"
                    showInfo={false}
                  />
                </motion.div>
              </Flex>
              <Flex vertical style={{ width: "100%" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="space_between">
                    <div className="regular_12">San Francisco</div>
                    <div className="regular_12">39K</div>
                  </div>
                  <Progress
                    percent={39}
                    strokeColor="#A8C5DA"
                    showInfo={false}
                  />
                </motion.div>
              </Flex>
              <Flex vertical style={{ width: "100%" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="space_between">
                    <div className="regular_12">Sydney</div>
                    <div className="regular_12">25K</div>
                  </div>
                  <Progress
                    percent={25}
                    strokeColor="#A8C5DA"
                    showInfo={false}
                  />
                </motion.div>
              </Flex>
              <Flex vertical style={{ width: "100%" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="space_between">
                    <div className="regular_12">Singapore</div>
                    <div className="regular_12">61K</div>
                  </div>{" "}
                  <Progress
                    percent={61}
                    strokeColor="#A8C5DA"
                    showInfo={false}
                  />
                </motion.div>
              </Flex>
            </Col>
          </Col>
        </Row>

        {/* 3rd row --------------------------------------------------------- */}
        <Row gutter={[30, 30]} className="margin_top margin_bottom">
          <Col
            xs={24}
            lg={17}
            md={24}
            sm={24}
            className={dark ? "grey border-style margin_right" : "border-style margin_right"}
          >
            <TopSellingProducts />
          </Col>
          <Col
            xs={24}
            lg={6}
            sm={24}
            className={dark ? "grey border-style" : "border-style"}
            style={{ height: "auto" }}
          >
            <div>
              <DonutChart />
            </div>
          </Col>
        </Row>
      </motion.ul>
    </div>
  );
};

export default Dashboard;
