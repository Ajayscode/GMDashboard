import { Grid, Paper, Title } from "@mantine/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const data = [
  { name: "Sprint 1", completed: 8, total: 10 },
  { name: "Sprint 2", completed: 12, total: 15 },
  { name: "Sprint 3", completed: 7, total: 8 },
  { name: "Sprint 4", completed: 15, total: 18 },
];

const velocityData = [
  { sprint: "Sprint 1", velocity: 8 },
  { sprint: "Sprint 2", velocity: 12 },
  { sprint: "Sprint 3", velocity: 7 },
  { sprint: "Sprint 4", velocity: 15 },
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
              <Bar dataKey="completed" fill="#82ca9d" name="Completed" />
              <Bar dataKey="total" fill="#8884d8" name="Total" />
            </BarChart>
          </Paper>
        </Grid.Col>

        <Grid.Col span={6}>
          <Paper shadow="xs" p="md">
            <Title order={3} mb="md">
              Velocity Trend
            </Title>
            <LineChart width={500} height={300} data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sprint" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="velocity" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
}
