import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const locations = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 }
];

const RevenueByLocation = () => {
  const maxRevenue = Math.max(...locations.map(location => location.revenue));
  const sizeScale = scaleLinear().domain([0, maxRevenue]).range([4, 10]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Revenue by Location</h2>
      <div className="mb-4" style={{ height: "300px" }}>
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F5F4F6"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates, revenue }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={sizeScale(revenue)} fill="#FF5533" stroke="#FFFFFF" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className="space-y-2">
        {locations.map(({ name, revenue }) => (
          <div key={name} className="flex justify-between items-center">
            <span className="text-gray-700">{name}</span>
            <span className="font-semibold">{revenue}K</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;