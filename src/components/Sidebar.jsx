import { Menu } from "antd";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineInventory2, MdOutlineShoppingCart } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="SideMenu">
      <Menu
      className="SideMenuVertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[location.pathname]} // Set the selected key based on the current path
        items={[
          {
            label: "Dashboard",
            icon: <TbLayoutDashboard />,
            key: '/',
          },
          {
            label: "Inventory",
            icon: <MdOutlineInventory2 />,
            key: '/inventory',
          },
          {
            label: "Products",
            icon: <MdOutlineShoppingCart />,
            key: '/products',
          },
          {
            label: "Customers",
            icon: <FaRegUser />,
            key: '/customers',
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
  