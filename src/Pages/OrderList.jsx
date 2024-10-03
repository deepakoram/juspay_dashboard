import { useState } from "react";
import { Table, Input, Avatar } from "antd";
import { useSelector } from "react-redux";
import search from "../assets/search.svg";
import plus from "../assets/plus.svg";
import plus_white from "../assets/plus_white.svg";
import menu from "../assets/menu.svg";
import menu_white from "../assets/menu_white.svg";
import updownarrow from "../assets/updownarrow.svg";
import updownarrow_white from "../assets/updownarrow_white.svg";

const dataSource = [
  {
    key: "1",
    orderId: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    key: "2",
    orderId: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    key: "3",
    orderId: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    key: "4",
    orderId: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    key: "5",
    orderId: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (e) => {
      return (
        <>
          <Avatar style={{ marginRight: "5px" }}></Avatar>
          <span>{e}</span>
        </>
      );
    },
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      if (status === "In Progress") {
        color = "blue";
      } else if (status === "Complete") {
        color = "green";
      } else if (status === "Pending") {
        color = "orange";
      } else if (status === "Approved") {
        color = "gold";
      } else if (status === "Rejected") {
        color = "red";
      }
      return <div style={{ color: `${color}` }}>{`● ${status}`}</div>;
    },
  },
];

const OrderList = () => {
  const dark = useSelector((state) => state.theme.value);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
  };

  const filteredData = dataSource.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchText)
    )
  );
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div className={dark ? "black padding" : "white padding"}>
      <div className="semibold_14">Order List</div>
      <div
        span={24}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: 16,
          background: dark ? "#272727" : "#F7F9FB",
          borderRadius: "16px",
        }}
        className="margin_top space_between"
      >
        <div style={{ width: "7%" }} className="space_between">
          <img src={dark ? plus_white : plus} />
          <img src={dark ? menu_white : menu} />
          <img src={dark ? updownarrow_white : updownarrow} />
        </div>
        <Input
          style={{ width: "15%" }}
          placeholder="Search"
          prefix={<img src={search} />}
          onChange={handleSearch}
        />
      </div>
      <Table
        className="order_list"
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default OrderList;
