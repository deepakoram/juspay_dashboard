import { Table } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/reset.css"; 

const TopSellingProducts = () => {
  const dark = useSelector((state) => state.theme.value);
  const dataSource = [
    {
      key: "1",
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      key: "2",
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      key: "3",
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      key: "4",
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81",
    },
    {
      key: "5",
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  return (
    <>
    <div className="semibold_14" style={{color:`${dark ? "white" : "black"}`}}>Top Selling Products</div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="table_style"
      />
    </>
  );
};

export default TopSellingProducts;
