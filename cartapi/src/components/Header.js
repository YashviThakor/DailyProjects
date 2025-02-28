import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Products</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
