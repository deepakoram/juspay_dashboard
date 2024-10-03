/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const data = [
  { month: "Jan", actuals: 16, projections: 4 },
  { month: "Feb", actuals: 19, projections: 6 },
  { month: "Mar", actuals: 17, projections: 4 },
  { month: "Apr", actuals: 22, projections: 6 },
  { month: "May", actuals: 14, projections: 3 },
  { month: "Jun", actuals: 19, projections: 6 },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const newWidth = 20;
  const newX = x + (width - newWidth) / 2;
  
  
  return (
    <g>
      <rect
        x={newX}
        y={y}
        width={newWidth}
        height={height}
        fill={fill}
        rx={4}
        ry={4}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />
    </g>
  );
};

const ProjectionsVsActualsChart = () => {
  const dark = useSelector((state) => state.theme.value);
  return (
    <div
    className="bar_chart"
      style={{
        backgroundColor: dark ? "#333333" : "#F5F7FA",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <ResponsiveContainer width="100%" height={190}>
        <BarChart
          data={data}
          // margin={{
          //   top: 20,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
          barSize={30}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E0E0E0"
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#B0B0B0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => `${value}M`}
            tick={{ fontSize: 12, fill: "#B0B0B0" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}M`}
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="actuals"
            stackId="a"
            fill="#A8C5DA"
            shape={<CustomBar />}
          />
          <Bar
            dataKey="projections"
            stackId="a"
            fill="#CFDFEB"
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsVsActualsChart;
