import { useEffect, useState } from "react"
import AllCustomer from "../API/AllCustomer"
import Table from 'react-bootstrap/Table'


const Customer = () => {
  const [dataSource, setDataSource] = useState([])


  useEffect(()=>{
 
    AllCustomer().then((res)=>{
      setDataSource(res.users)

    })
  })
  return (
    <>
    <Table striped bordered hovers>
    <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map(users => 
              <tr>
                <td><img src={users.image} alt="" style={{width:50}}/></td>
                <td>{`${users.firstName} ${users.lastName}`}</td>
                <td>{users.phone}</td>
                <td>{users.email}</td>
                <td>{`${users.address.address}, ${users.address.city}, ${users.address.state}, ${users.address.postalCode}, ${users.address.country}`}</td>
              </tr>
        )}
      </tbody>
    </Table>
    </>
  )
}
export default Customer