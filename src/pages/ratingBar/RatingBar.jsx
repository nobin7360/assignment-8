import React from "react";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Cell,Tooltip} from "recharts";

const RatingBar = ({ ratings }) => {
  const data = [...ratings].reverse().map((r) => ({
    star: r.name,
    count: r.count,
  }));

  return (
    <div className="w-full h-auto mt-8">
      <h2 className="text-xl font-bold mb-3">Ratings</h2>

      <ResponsiveContainer width="100%" height={60 * data.length}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <XAxis
            type="number"
            tickFormatter={(v) => v.toLocaleString()}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="star"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14 }}
          />

          {/* Tooltip for hover values */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0)" }}
            formatter={(value) => [value.toLocaleString(), "Users"]}
          />

          <Bar dataKey="count" barSize={30} radius={[2, 2, 2, 2]}>
            {data.map((d) => (
              <Cell key={d.star} fill="#FF8811" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingBar;
