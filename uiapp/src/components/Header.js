import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ display: "flex", justifyContent: "center" }}>
      <Menu.Item key="home">
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="cart">
        <Link to="/cart">Cart</Link>
      </Menu.Item>
      <Menu.Item key="user">
        <Link to="/user">User</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
