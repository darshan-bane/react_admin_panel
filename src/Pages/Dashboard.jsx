import {Space} from "antd"
import { FiShoppingCart } from "react-icons/fi"
import {Card, Statistic, Table} from "antd"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineInventory2 } from "react-icons/md"
import { RiMoneyRupeeCircleLine } from "react-icons/ri"
import { useEffect, useState } from "react"
import GetOrders from "../API/GetOrders"
import { Chart as Chartjs, defaults } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import ChartData from "../API/ChartData.json"
import RevenueData from "../API/RevenueData.json"
import AllOrders from "../API/AllOrders"
import getInventory from "../API/getInventory"
import AllCustomer from "../API/AllCustomer"

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black"

const Dashboard = () => {

  const [orders,setOrders] = useState(0)
  const [inventory,setInventory] = useState(0)
  const [customers,setCustomers] = useState(0)
  const [revenue,setRevenue] = useState(0)

  useEffect(()=>{
    GetOrders().then((res)=>{
      setOrders(res.total)
      setRevenue(res.discountedTotal)
    })
    getInventory().then((res)=>{
      setInventory(res.total)
    })
    AllCustomer().then((res)=>{
      setCustomers(res.total)
    })
  },[])

  return (
    <div className="dashboard_container">

    <h3>Dashboard</h3>
    <Space direction="horizontal">
    <DashboardCard icon={  <FiShoppingCart size={40} style={{color:"red", background:"#ff000030", padding:"10px", borderRadius:"15px"}} />} 
    title={"Orders"} 
    value={orders}/>

    <DashboardCard icon={<FaRegUser size={40} style={{color:"blue", background:"#0000ff30", padding:"10px", borderRadius:"15px"}}/>} 
    title={"Customers"} 
    value={customers}/>

    <DashboardCard icon={<MdOutlineInventory2 size={40} style={{color:"orange", background:"#ffae0030", padding:"10px", borderRadius:"15px"}}/>} 
    title={"Inventory"} 
    value={inventory}/>

    <DashboardCard icon={<RiMoneyRupeeCircleLine size={40} style={{color:"green", background:"#33ff0030", padding:"10px", borderRadius:"15px"}}/>} 
    title={"Revenue"} 
    value={revenue}/>
    </Space>

    <Space className="mt-3">
      <RecentOrder/>
      <Card style={{width:650,borderColor:"gray"}}>
      <Line
       data={{
        labels: RevenueData.map((data)=> data.label ),
        datasets: [
          {
            label:"Revenue",
            data: RevenueData.map((data)=> data.revenue),
            backgroundColor:"red",
            borderColor: "red"
          },
          {
            label:"Cost",
            data: RevenueData.map((data)=> data.cost),
            backgroundColor:"blue",
            borderColor: "blue"
          },
        ]
      }}
      options={{
        plugins:{
          title:{
            text:"Line Chart 2"
          }
        }
      }}/>
    </Card>
    <Card  style={{  borderColor:"gray"}}>
    <Doughnut
      data={{
      labels: ChartData.map((data)=> data.lable),
      datasets: [
        {
          label:"Count",
          data: ChartData.map((data)=> data.value),
          backgroundColor:[
            "pink",
            "blue",
            "green"
          ]
        }
      ]
    }}
    // ==== for heading ====
    options={{
      plugins:{
        title:{
          text:"Doughtnut Chart"
        }
      }
    }}
     // ==== for heading close ====
    />
    </Card>
    </Space>


    <Space>        
    <Card  style={{  borderColor:"black"}}>
      <Bar
      data={{
      labels: ChartData.map((data)=> data.lable),
      datasets: [
        {
          label:"Count",
          data: ChartData.map((data)=> data.value),
          backgroundColor:[
            "red",
            "blue",
            "green"
          ],
          borderRadius: 5
        }
      ]
    }}
    options={{
      plugins:{
        title:{
          text:"Bar Chart"
        }
      }
    }}
    />
    </Card>


    {/* <Card  style={{  borderColor:"black"}}>
    <Doughnut
      data={{
      labels: ChartData.map((data)=> data.lable),
      datasets: [
        {
          label:"Count",
          data: ChartData.map((data)=> data.value),
          backgroundColor:[
            "pink",
            "blue",
            "green"
          ]
        }
      ]
    }}
    options={{
      plugins:{
        title:{
          text:"Doughtnut Chart"
        }
      }
    }}
    />
    </Card> */}



    <Card style={{ borderColor:"black"}}>
    <Line
      data={{
      labels: ChartData.map((data)=> data.lable),
      datasets: [
        {
          label:"Count",
          data: ChartData.map((data)=> data.value),
          backgroundColor:[
            "red",
            "blue",
            "green"
          ]
        }
      ]
    }}
    options={{
      plugins:{
        title:{
          text:"Line Chart"
        }
      }
    }}
    />
    </Card>
    </Space>
    </div>
  )
}
export default Dashboard




function DashboardCard({title, value, icon}) {
  return(
    <Card >
      <Space direction="horizontal"> 
      {icon}
        <Statistic title={title} value={value}/>
      </Space>
    </Card>
  )
}




function RecentOrder() {
  const[dataSource, setDataSource] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true);
    GetOrders().then((res)=>{
      setDataSource(res.products.splice(0,3))
      setLoading(false)
    })
  },[])

  return(
    <>
    <h4>Recent Orders</h4>
    <Table       
    columns={[
      {
        title: "Title",
        dataIndex: "title"    
      },
      {
        title: "Quantity",
        dataIndex: "quantity"    
      },  
      {
        title: "Price",
        dataIndex: "discountedTotal"    
      },
    ]}
    loading={loading}
    dataSource={dataSource}
    pagination={false}
    >
    </Table></>
  )
}

