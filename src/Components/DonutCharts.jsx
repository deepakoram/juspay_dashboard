import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#D1FADF" },
  { name: "Sponsored", value: 154.02, color: "#C7D2FE" },
  { name: "E-mail", value: 48.96, color: "#A7F3D0" }
];

const DonutChart = () => {
  const dark = useSelector((state) => state.theme.value);

  return (
    <div style={{ width: "100%", height: 250, backgroundColor: `${dark ? "#333333" : "#f9fafb"}`, padding: '10px', borderRadius: '10px' }}>
      <div className="semibold_14" style={{color: `${dark ? "white" : "black"}`}}>Total Sales</div>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={58}
            outerRadius={80}
            cornerRadius={15}
            dataKey="value"
            labelLine={false}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value}`} />
        </PieChart>
      </ResponsiveContainer>

      <div>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <span className="regular_12">
             <span style={{ color: entry.color }}> ● </span> {entry.name}
            </span>
            <span>${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
