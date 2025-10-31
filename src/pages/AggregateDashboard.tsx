import { Grid, Paper, Title } from "@mantine/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Sprint 1", items: 8, bugs: 10, productionEscalations: 2 },
  { name: "Sprint 2", items: 12, bugs: 5, productionEscalations: 3 },
  { name: "Sprint 3", items: 21, bugs: 15, productionEscalations: 2 },
  { name: "Sprint 4", items: 15, bugs: 10, productionEscalations: 5 },
];

export function AggregateDashboard() {
  return (
    <div className="dashboard-container">
      <Grid p="md" gutter="lg">
        <Grid.Col span={6}>
          <Paper shadow="xs" p="md">
            <Title order={3} mb="md">
              Items Per Sprint
            </Title>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="items" fill="#82ca9d" name="items" />
              <Bar dataKey="bugs" fill="#8884d8" name="bugs" />
              <Bar
                dataKey="productionEscalations"
                fill="#ff7300"
                name="Production Escalations"
              />
            </BarChart>
          </Paper>
        </Grid.Col>

        <Grid.Col span={6}>
          <Paper shadow="xs" p="md">
            <Title order={3} mb="md">
              Sprint Trend
            </Title>
            <AreaChart
              width={500}
              height={300}
              responsive
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorItems" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorBugs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorEscalations"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="items"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorItems)"
              />
              <Area
                type="monotone"
                dataKey="bugs"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorBugs)"
              />
              <Area
                type="monotone"
                dataKey="productionEscalations"
                stroke="#ff7300"
                fillOpacity={1}
                fill="url(#colorEscalations)"
              />
            </AreaChart>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
}
