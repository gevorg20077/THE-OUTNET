import { Outlet } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import Chat from "../../Components/Chat/Chat";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div>fddef</div>
      <Menu />
      <Outlet />
      <Footer />
      <Chat />
    </div>
  );
};

export default Layout;
