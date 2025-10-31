import {
  Table,
  Button,
  Group,
  Title,
  TextInput,
  Badge,
  Menu,
  ActionIcon,
} from "@mantine/core";
import {
  IconEdit,
  IconTrash,
  IconDotsVertical,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import "./SprintsDashboard.css";

interface SprintData {
  id: number;
  sprintName: string;
  items: number;
  status: "active" | "completed" | "planned";
  startDate: string;
}

const mockData: SprintData[] = [
  {
    id: 1,
    sprintName: "Sprint 1",
    items: 10,
    status: "completed",
    startDate: "2025-10-01",
  },
  {
    id: 2,
    sprintName: "Sprint 2",
    items: 15,
    status: "active",
    startDate: "2025-10-15",
  },
  {
    id: 3,
    sprintName: "Sprint 3",
    items: 8,
    status: "planned",
    startDate: "2025-10-29",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "blue";
    case "completed":
      return "green";
    case "planned":
      return "gray";
    default:
      return "gray";
  }
};

export function SprintsDashboard() {
  const handleEdit = (id: number) => {
    console.log("Edit sprint", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete sprint", id);
  };

  const rows = mockData.map((sprint) => (
    <Table.Tr key={sprint.id}>
      <Table.Td>{sprint.id}</Table.Td>
      <Table.Td>
        <Group>
          {sprint.sprintName}
          <Badge
            className="status-badge"
            color={getStatusColor(sprint.status)}
            variant="light"
          >
            {sprint.status}
          </Badge>
        </Group>
      </Table.Td>
      <Table.Td>{sprint.items}</Table.Td>
      <Table.Td>{sprint.startDate}</Table.Td>
      <Table.Td>
        <Menu shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDotsVertical size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEdit size={14} />}
              onClick={() => handleEdit(sprint.id)}
            >
              Edit Sprint
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={14} />}
              onClick={() => handleDelete(sprint.id)}
              color="red"
            >
              Delete Sprint
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="sprints-dashboard">
      <div className="sprints-header">
        <Title order={2}>Sprints</Title>
        <Group>
          <TextInput
            placeholder="Search sprints..."
            leftSection={<IconSearch size={16} />}
            style={{ width: 250 }}
          />
          <Button leftSection={<IconPlus size={16} />}>New Sprint</Button>
        </Group>
      </div>

      <div className="table-container">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Sprint Name</Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Start Date</Table.Th>
              <Table.Th style={{ width: 50 }}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
}
