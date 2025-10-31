import {
  AppShell as MantineAppShell,
  Text,
  Burger,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { IconChartBar, IconList } from "@tabler/icons-react";
import "./AppShell.css";
import { SprintsDashboard } from "../pages/SprintsDashboard";
import { AggregateDashboard } from "../pages/AggregateDashboard";

export default function AppShell() {
  const [mobileOpened, setMobileOpened] = useState(false);
  const theme = useMantineTheme();
  const location = useLocation();

  return (
    <>
      <MantineAppShell
        navbar={{
          width: "250px",
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened },
        }}
        header={{ height: 60 }}
      >
        <MantineAppShell.Header>
          <div className="header-container">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.spacing.sm,
              }}
            >
              <Burger
                opened={mobileOpened}
                onClick={() => setMobileOpened(!mobileOpened)}
                hiddenFrom="sm"
                size="sm"
                color="white"
              />
              <Text size="xl" fw={700}>
                GM Dashboard
              </Text>
            </Box>
          </div>
        </MantineAppShell.Header>

        <MantineAppShell.Navbar p="md">
          <Link
            to="/sprints"
            className={`nav-link ${
              location.pathname === "/sprints" ? "active" : ""
            }`}
          >
            <IconList size={20} />
            <Text>Sprints</Text>
          </Link>
          <Link
            to="/aggregate"
            className={`nav-link ${
              location.pathname === "/aggregate" ? "active" : ""
            }`}
          >
            <IconChartBar size={20} />
            <Text>Aggregate Dashboard</Text>
          </Link>
        </MantineAppShell.Navbar>
        <MantineAppShell.Main style={{ width: "100vw" }}>
          <Routes>
            <Route path="/sprints" element={<SprintsDashboard />} />
            <Route path="/aggregate" element={<AggregateDashboard />} />
            <Route path="/" element={<SprintsDashboard />} />
          </Routes>
        </MantineAppShell.Main>
      </MantineAppShell>
    </>
  );
}
