import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
