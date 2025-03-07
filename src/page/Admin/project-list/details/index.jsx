import { Avatar, Badge, Card, Tabs, Tooltip } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { FiUser } from "react-icons/fi";
import TimeLine from "./TimeLine";
import TaskList from "./TaskList";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "Timeline",
      children: <TimeLine />,
    },
    {
      key: "2",
      label: "Task List",
      children: <TaskList />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  const onTabChange = (key) => {
    switch (key) {
      case "1":
        navigate("timeline");
        break;
      case "2":
        navigate("task-list");
        break;
      case "3":
        // navigate("security");
        break;
      default:
        navigate("details");
    }
  };

  return (
    <div className="p-4">
      <Card
        title={
          <h1 className="font-bold text-3xl text-primary">Project Detail</h1>
        }
        className="shadow-lg"
        bordered={false}
      >
        <p className="text-base mb-4 text-gray-700">
          <span className="text-lg font-semibold text-gray-900">
            Description:{" "}
          </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci
          excepturi dolore molestias veritatis ea modi in praesentium quibusdam
          necessitatibus suscipit, rem rerum eos pariatur officia nam nisi
          dignissimos explicabo?
        </p>

        <p className="mb-4">
          <span className="mr-2 text-lg font-semibold">Status:</span>
          <Badge status="processing" text="Working" />
        </p>

        <p className="flex items-center mb-4">
          <FiUser className="text-xl mr-2 text-primary" />
          <span className="text-lg font-semibold">Manager: </span>
          <span className="flex items-center ml-2">
            <Tooltip title="Ant User">
              <Avatar
                size="small"
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
          </span>
        </p>

        <p className="mb-4">
          <span className="text-lg font-semibold">User ID:</span> {id}
        </p>

        <div className="mb-4">
          <span className="text-lg font-semibold">CreateAt:</span> yyyy-mm-dd
        </div>
        <div className="mb-4">
          <span className="text-lg font-semibold">Deadline:</span> yyyy-mm-dd
        </div>

        <div className="mb-4">
          <span className="text-lg font-semibold">Team Members:</span>
          <Avatar.Group maxCount={4} size="small">
            <Tooltip title="User A">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            </Tooltip>
            <Tooltip title="User B">
              <Avatar style={{ backgroundColor: "#f56a00" }}>B</Avatar>
            </Tooltip>
            <Tooltip title="User C">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Tooltip title="User D">
              <Avatar
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Tooltip>
          </Avatar.Group>
        </div>

        <Tabs items={items} onChange={onTabChange} />
      </Card>
    </div>
  );
};

export default DetailProject;
