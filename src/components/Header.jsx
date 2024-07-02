import { MdOutlineEmail } from "react-icons/md"
import {Space,Badge,Drawer} from "antd"
import logo from "../assest/favicon.png"
import { FaRegBell } from "react-icons/fa"
import { useState } from "react"
import GetComments from "../API/GetComments"
import GetOrders from "../API/GetOrders"


const Header = () => {

  const [openComments, setopenComments] = useState(false)
  const [openNotification, setopenNotification] = useState(false)

  const [comments, setComments] = useState([])
  const [orders, setOrders] = useState([])
  useState(()=>{
    GetComments().then(res=>{
      setComments(res.comments)
    })
    GetOrders().then(res=>{
      setOrders(res.products)
    })
  })
  return (
    <div className="AppHeader">
        <img src={logo}></img>
        <h3>Dashboard</h3>
        <Space>
            <Badge count={comments.length} dot ><MdOutlineEmail size={30} onClick={()=>{
              setopenComments(true)
            }} style={{cursor:"pointer"}} /></Badge>

            <Badge  count={orders.length} ><FaRegBell size={30}  style={{cursor:"pointer"}} onClick={()=>{
              setopenNotification(true)
            }}/></Badge> 


            <Drawer 
            title='Comments'
            footer='This is Footer'
            open={openComments}
            onClose={()=>{
              setopenComments(false)
            }}
            maskClosable={true}
             >

              <div>
                {comments.map(comment =>
                <p>{comment.body}</p>
                )}
              </div>
            </Drawer>



            <Drawer 
            title='Notifications'
            footer='This is Footer'
            open={openNotification}
            onClose={()=>{
              setopenNotification(false)
            }}
            maskClosable={true}
             >
              <ul>
                {orders.map(order=>
                <li style={{listStyle:"decimal"}}>
                  <p>{order.title} has been ordered!</p>
                </li>
                )}
              </ul>
            </Drawer>
        </Space>

        
    </div>
  )
}
export default Header