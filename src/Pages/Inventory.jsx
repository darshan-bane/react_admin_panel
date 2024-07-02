import { useEffect, useState } from "react"
import getInventory from "../API/getInventory"
import {Space, Table, Avatar, Rate} from "antd"


const Inventory = () => {

  const[loading, setLoading] = useState(false)
  const[dataSource, setDataSource] = useState([])

  useEffect(() => {
    setLoading(true)
    getInventory().then((res)=>{
      setDataSource(res.products)
      setLoading(false)
    })
  
  }, [])
  

  return (
    <div className="inventory_container">
       <h3>Inventory</h3>
    <Space>
      <Table columns={[
        {
          title:"Thumbnail",
          dataIndex:"thumbnail",
          render:(link)=>{
            return <Avatar  src={link} size={50} />
          }
        },
        {
          title:"Title",
          dataIndex:"title"
        },
        {
          title:"Price",
          dataIndex:"price",
          render:(money)=><span>${money}</span>
        },
        {
          title:"Rating",
          dataIndex:"rating",
          render:(rating)=>{
            return <Rate value={rating} allowHalf disabled/>
          }
        },
        {
          title:"Brand",
          dataIndex:"brand"
        },
        {
          title:"Category",
          dataIndex:"category"
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={{
        pageSize: 7
      }}
      />
    </Space>
    </div>
  )
}
export default Inventory