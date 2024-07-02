import { useEffect, useState } from "react";
import AllOrders from "../API/AllOrders";
import { Space, Avatar, Button, message } from "antd";
import Table from "react-bootstrap/Table";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);

    AllOrders()
      .then((res) => {
        console.log(res);
        // Flatten the products from all carts
        // const products = res.carts.flatMap(cart => cart.products);

        setDataSource(res);
        setLoading(false);
      })
      .catch((err) => {
        setDataSource([]);
      });
  }, []);

  // const handleDelete = (id) => {
  //   setDataSource(prevDataSource => prevDataSource.filter(item => item.id !== id));
  //   message.success("Product deleted successfully");
  // };

  async function handleDelete(id) {
    await fetch("http://127.0.0.1:3001/api/v1/products/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyNjRmOWM5OWZmNWIxM2QzY2YxMmEiLCJ1c2VybmFtZSI6ImFkbWluIiwiZnVsbE5hbWUiOiJBZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzE5ODI2NzI5LCJleHAiOjE3MTk5MTMxMjl9.RPohyAPpMAthJ_DCjY82yT9B6FDrKfsC6DszT8TWx88",
      },
    }).then((res) => {
      let newDataSource = dataSource.filter((product) => product.id !== id);
      setDataSource(newDataSource);
      message.success("Product deleted successfully");
    });
  }

  return (
    <div className="inventory_container">
      <h3>Orders</h3>
      {/* <Space>
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} size={50}/>;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Discounted Total",
              dataIndex: "discountedTotal",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Action",
              dataIndex: "action",
              render: (_, record) => (
                <Button
                  type="primary"
                  danger
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          rowKey={(record) => record.id} // Ensure each row has a unique key
        />
      </Space> */}
      {/* <Space>
        <Table
          columns={[
            {
              title: "Order uuid",
              dataIndex: "order_uuid",
            },
            {
              title: "Name",
              dataIndex: ["address", "name"],

            },
            {
              title: "Price",
              dataIndex: "amount",
              render: (price) => <span>₹{price}</span>,
            },
            {
              title: "Product Name",
              dataIndex: ["order_products","name"],
              render : 
              order_products.map((product)=>{
                  <span>${product.name}</span>
                })
              
            },
            {
              title: "Total",
              dataIndex: "total",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Discounted Total",
              dataIndex: "discountedTotal",
              render: (price) => <span>${price}</span>,
            },
            {
              title: "Action",
              dataIndex: "action",
              render: (_, record) => (
                <Button
                  type="primary"
                  danger
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          rowKey={(record) => record.id} // Ensure each row has a unique key
        />
      </Space> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((products) => (
            <tr>
              <td>{products.name}</td>
              <td>₹ {products.price}</td>
              <td>₹ {products.discount}</td>
              <td>{products.category ? products.category.name : "-"} </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(products.id)}
                >
                  Delete
                </button>
              </td>
              {/*
                <td>{products.order_products.map((product)=>product.quantity).join(',  ')}</td>
                <td>₹{products.total_amount}</td>
                <td>{products.order_products.map((product)=>product.images.map((images)=>images.path)).map(path=><img src={path} alt="" style={{width:100}}/>)}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
