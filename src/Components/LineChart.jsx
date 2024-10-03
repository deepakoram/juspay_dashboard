import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Col } from "antd";
import { useSelector } from "react-redux";

import hr_icon from "../assets/hr.svg";
import black_dot from "../assets/black_dot.svg";
import white_dot from "../assets/white_dot.svg";

const RevenueLineChart = () => {
  const dark = useSelector((state) => state.theme.value);

  const data = [
    { name: "Jan", currentWeek: 7000000, previousWeek: 5000000 },
    { name: "Feb", currentWeek: 10000000, previousWeek: 15000000 },
    { name: "Mar", currentWeek: 8000000, previousWeek: 12000000 },
    { name: "Apr", currentWeek: 17000000, previousWeek: 8000000 },
    { name: "May", currentWeek: 19000000, previousWeek: 15000000 },
    { name: "Jun", currentWeek: 22000000, previousWeek: 23000000 },
  ];
  return (
    <div className="h-[400px] p-4" style={{ width: "100%" }}>
      <Col span={24} className="space_between margin" style={{ width: "70%" }}>
        <Col
          className="semibold_14"
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          Revenue
        </Col>
        <img src={hr_icon} />
        <Col className="align_center padding_none">
          <img src={black_dot} style={{ marginRight: "5px" }} />
          <Col className="align_center regular_12 padding_none">
            Current Week &nbsp;
            <span
              className="semibold_14"
              style={{ color: `${dark ? "white" : "black"}` }}
            >
              $58,211
            </span>
          </Col>
        </Col>

        <Col className="align_center padding_none">
          <img src={white_dot} style={{ marginRight: "5px" }} />
          <Col className="align_center regular_12 padding_none">
            Current Week &nbsp;
            <span
              className="semibold_14"
              style={{ color: `${dark ? "white" : "black"}` }}
            >
              $58,211
            </span>
          </Col>
        </Col>
      </Col>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorCurrentWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity={1} />
              <stop offset="100%" stopColor="#4b4b4b" stopOpacity={0.5} />
            </linearGradient>

            <linearGradient id="colorPreviousWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity={1} />
              <stop offset="100%" stopColor="#bfdfff" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />{" "}
          {/* Disable vertical lines */}
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="url(#colorCurrentWeek)"
            strokeWidth={2}
            dot={false}
            animationDuration={2000}
            strokeDasharray="5 5"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="url(#colorPreviousWeek)"
            strokeWidth={2}
            dot={false}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueLineChart;
