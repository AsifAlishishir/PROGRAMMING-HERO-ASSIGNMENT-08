import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartData = ({ ratings }) => {
//   console.log(ratings);
  if (!ratings || ratings.length === 0) {
    return <p>No rating data available.</p>;
  }

  const maxCount = Math.max(...ratings.map((item) => item.count));
  const reversedRatings = ratings.slice().reverse();

  return (
    <div style={{ width: "100%", height: 300 }} className="mb-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={reversedRatings}
          layout="vertical"
          margin={{ top: 5, right: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <YAxis dataKey="name" type="category" stroke="#627382" />

          <XAxis type="number" stroke="#627382" domain={[0, maxCount * 1.05]} />

          <Tooltip />

          <Bar dataKey="count" fill="#ff8c00" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartData;
