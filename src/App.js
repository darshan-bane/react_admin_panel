import './App.css';
import Header from './components/Header';
// import * as Spaces from "react-spaces";
import { Space, Button } from "antd"
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />

      <Space className="SidebarAndContent">
        <Sidebar /><PageContent />
      </Space>


      <Footer />
    </>
  );
}

export default App;
