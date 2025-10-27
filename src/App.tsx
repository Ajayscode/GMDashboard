import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./components/AppShell";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
